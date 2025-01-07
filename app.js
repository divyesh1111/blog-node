require('dotenv').config();

// Required modules
const express = require('express');
const cors = require('cors');
const mongoose = require('./config/db'); // Assuming this file handles the DB connection
const postRoutes = require('./routes/postRoutes');

// Initialize the app
const app = express();

// Enable CORS for all origins (for development purposes)
app.use(cors()); // You can configure CORS options for more security if needed

// Middleware to parse incoming JSON requests
app.use(express.json());

// Routes for handling API requests
app.use('/api/v1/posts', postRoutes);

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


module.exports = app;
