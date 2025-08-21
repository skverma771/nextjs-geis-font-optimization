const express = require('express');
const router = express.Router();

// Import necessary controllers
const { register, login, refresh, logout, getMe } = require('../controllers/authController');

// Auth routes
router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refresh);
router.post('/logout', logout);
router.get('/me', getMe);

module.exports = router;
