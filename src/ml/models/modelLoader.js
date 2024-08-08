// src/ml/models/modelLoader.js
const trainedModel = require('./trainedModel');

exports.getModel = (path) => {
  return trainedModel.loadModel(path);
};
