const request = require('supertest');
const app = require('../src/index');
const mongoose = require('mongoose');
const Transaction = require('../src/models/transactionModel');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/financial-analytics-test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Analytics Controller', () => {
  it('should get analytics data', async () => {
    const response = await request(app).get('/analytics');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
