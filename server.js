const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const winston = require('winston');

// Import routes
const userRoutes = require('./routes/user');
const transactionRoutes = require('./routes/transaction');

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const db = 'YOUR_MONGODB_CONNECTION_STRING';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => winston.info('Connected to MongoDB...'))
  .catch(err => winston.error('Could not connect to MongoDB...', err));

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Financial Analytics Platform');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => winston.info(`Server running on port ${port}...`));
