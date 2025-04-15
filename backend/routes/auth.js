// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
// require('dotenv').config();
// const { signup, login } = require('../controllers/authController');

// // POST /signup
// router.post('/signup', async (req, res) => {
//   const { name, email, password, role } = req.body;
//   try {
//     const userExists = await User.findOne({ where: { email } });
//     if (userExists) return res.status(400).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       role: role || 'customer'
//     });

//     const token = jwt.sign({ id: newUser.id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
//     res.status(201).json({ token, user: { id: newUser.id, name: newUser.name, role: newUser.role } });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // POST /login
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ where: { email } });
//     if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

//     const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
//     res.status(200).json({ token, user: { id: user.id, name: user.name, role: user.role } });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;


// authRoutes.js
const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/auth');
const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = await User.create({ name, email, password, role });
    const token = generateToken(newUser);

    return res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// User Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    return res.json({ message: 'Login successful', token });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
