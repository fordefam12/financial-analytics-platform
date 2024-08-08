// src/ml/models/trainedModel.js
const fs = require('fs');

exports.loadModel = (path) => {
  // Load your trained model here
  return JSON.parse(fs.readFileSync(path, 'utf8'));
};
