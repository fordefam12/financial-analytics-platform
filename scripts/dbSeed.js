const mongoose = require('mongoose');
const User = require('../src/models/userModel');
const Transaction = require('../src/models/transactionModel');
const { connectToDatabase } = require('../config/dbConfig');

connectToDatabase();

const seedDatabase = async () => {
  await User.deleteMany({});
  await Transaction.deleteMany({});

  const user = new User({ name: 'John Doe', email: 'john@example.com', password: 'password' });
  await user.save();

  const transactions = [
    { userId: user._id, amount: 100, date: new Date(), type: 'income' },
    { userId: user._id, amount: 50, date: new Date(), type: 'expense' },
  ];

  await Transaction.insertMany(transactions);

  mongoose.connection.close();
};

seedDatabase();
