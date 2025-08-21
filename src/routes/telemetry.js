const express = require('express');
const router = express.Router();

// Import necessary controllers
const { postTelemetry, getLatestTelemetry, getTelemetryByTimeRange } = require('../controllers/telemetryController');

// Telemetry routes
router.post('/', postTelemetry);
router.get('/:id/latest', getLatestTelemetry);
router.get('/:id/telemetry', getTelemetryByTimeRange);

module.exports = router;
