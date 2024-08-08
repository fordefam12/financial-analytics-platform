const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  date: Date,
  type: String,
});

module.exports = mongoose.model('Transaction', transactionSchema);
