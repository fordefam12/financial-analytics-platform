const AnalyticsService = require('../services/analyticsService');

exports.getAnalytics = async (req, res) => {
  try {
    const data = await AnalyticsService.getAnalytics(req.query);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
