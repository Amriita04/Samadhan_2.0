const router = require('express').Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// POST a new product (admin only)
router.post('/', async (req, res) => {
  // In production, check for isAdmin using JWT
  const { title, description, price, image } = req.body;
  try {
    const newProduct = new Product({ title, description, price, image });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create product' });
  }
});

module.exports = router;
