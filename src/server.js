const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const bikeRoutes = require('./routes/bikes');
const telemetryRoutes = require('./routes/telemetry');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/bikes', bikeRoutes);
app.use('/api/v1/telemetry', telemetryRoutes);
app.use('/api/v1/admin', adminRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
