const router = require('express').Router();
const Order = require('../models/Order');
const jwt = require('jsonwebtoken');

// Middleware to verify JWT
function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = decoded;
    next();
  });
}

// POST - place order
router.post('/', verifyToken, async (req, res) => {
  const { products, amount, address } = req.body;

  try {
    const newOrder = new Order({
      userId: req.user.id,
      products,
      amount,
      address,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// GET - user orders
router.get('/user/:id', verifyToken, async (req, res) => {
  try {
    // Optional: Only allow users to view their own orders
    if (req.user.id !== req.params.id && !req.user.isAdmin) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const orders = await Order.find({ userId: req.params.id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;
