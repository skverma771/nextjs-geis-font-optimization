const Bike = require('../models/Bike'); // Assuming a Bike model is defined

// Register a new bike
exports.registerBike = async (req, res) => {
    const { bike_id, qr_code, nickname } = req.body;
    try {
        const newBike = await Bike.create({ bike_id, qr_code, nickname, owner_user_id: req.user.id }); // Assuming req.user contains the authenticated user
        res.status(201).json({ message: 'Bike registered', bike: newBike });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all bikes for a user
exports.getBikes = async (req, res) => {
    try {
        const bikes = await Bike.findAll({ where: { owner_user_id: req.user.id } });
        res.json(bikes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get bike details
exports.getBikeDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const bike = await Bike.findOne({ where: { id, owner_user_id: req.user.id } });
        if (!bike) {
            return res.status(404).json({ error: 'Bike not found' });
        }
        res.json(bike);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update bike information
exports.updateBike = async (req, res) => {
    const { id } = req.params;
    const { nickname, status } = req.body;
    try {
        const bike = await Bike.findOne({ where: { id, owner_user_id: req.user.id } });
        if (!bike) {
            return res.status(404).json({ error: 'Bike not found' });
        }
        await bike.update({ nickname, status });
        res.json({ message: 'Bike updated', bike });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
