const express = require('express');
const router = express.Router();

// Import necessary controllers
const { getUsers, getBikes, generateUsageReport, assignSubscription } = require('../controllers/adminController');

// Admin routes
router.get('/users', getUsers);
router.get('/bikes', getBikes);
router.get('/reports/usage', generateUsageReport);
router.post('/subscription/assign', assignSubscription);

module.exports = router;
