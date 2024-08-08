const User = require('../models/userModel');

exports.createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

exports.getUserById = async (id) => {
  return User.findById(id);
};
