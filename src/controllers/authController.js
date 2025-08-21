const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming a User model is defined

// Register a new user
exports.register = async (req, res) => {
    const { name, email, phone, password } = req.body;
    try {
        const newUser = await User.create({ name, email, phone, password_hash: password }); // Hash password in production
        res.status(201).json({ message: 'User created', user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login a user
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user || user.password_hash !== password) { // Validate password in production
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const accessToken = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        const refreshToken = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '7d' });
        res.json({ access_token: accessToken, refresh_token: refreshToken, expires_in: 3600, user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Refresh token
exports.refresh = async (req, res) => {
    const { refresh_token } = req.body;
    // Logic to refresh token
};

// Logout user
exports.logout = async (req, res) => {
    // Logic to logout user
};

// Get current user profile
exports.getMe = async (req, res) => {
    // Logic to get user profile
};
