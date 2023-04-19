const router = require('express').Router();

// Sample test route
router.get('/', async (req, res) => {
  try {
    res.status(200).json({ message: 'Test route is working!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;