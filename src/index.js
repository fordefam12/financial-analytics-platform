const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const { connectToDatabase } = require('../config/dbConfig');

const app = express();
const port = process.env.PORT || 3000;

connectToDatabase();

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/analytics', analyticsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
