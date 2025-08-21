const express = require('express');
const router = express.Router();

// Import necessary controllers
const { registerBike, getBikes, getBikeDetail, updateBike } = require('../controllers/bikeController');

// Bike routes
router.post('/register', registerBike);
router.get('/', getBikes);
router.get('/:id', getBikeDetail);
router.put('/:id', updateBike);

module.exports = router;
