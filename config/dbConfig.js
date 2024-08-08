const mongoose = require('mongoose');
const logger = require('../src/utils/logger');

exports.connectToDatabase = () => {
  mongoose.connect('mongodb://localhost:27017/financial-analytics', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    logger.info('Connected to MongoDB');
  }).catch((error) => {
    logger.error('Error connecting to MongoDB:', error);
  });
};
