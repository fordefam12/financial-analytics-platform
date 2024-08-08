const Transaction = require('../models/transactionModel');

exports.getAnalytics = async (query) => {
  const transactions = await Transaction.find(query);
  // Implement your analytics logic here
  return transactions;
};
