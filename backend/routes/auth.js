const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected route
router.get('/profile', authMiddleware, (req, res) => {
  try{
    res.json({
      message: 'Welcome to your profile',
      user: req.user
    });
  }catch(err){
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
  
});

module.exports = router;

