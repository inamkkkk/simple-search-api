const searchService = require('../services/searchService');

exports.search = (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'Search query is required' });
  }
  const results = searchService.searchData(query);
  res.json(results);
};
