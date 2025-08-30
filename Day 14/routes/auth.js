const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const db = require('../db');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();
const SECRET = 'your_jwt_secret';

// Validation schema
const schema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).required()
});

// Register
router.post('/register', async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { username, password } = req.body;
  const existing = db.data.users.find(u => u.username === username);
  if (existing) return res.status(409).send('User already exists');

  const hashed = await bcrypt.hash(password, 10);
  db.data.users.push({ username, password: hashed });
  await db.write();
  res.status(201).send('User registered');
});

// Login
router.post('/login', async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { username, password } = req.body;
  const user = db.data.users.find(u => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Invalid credentials');
  }

  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Protected route
router.get('/profile', verifyToken, (req, res) => {
  res.send(`Welcome, ${req.user.username}`);
});

module.exports = router;
