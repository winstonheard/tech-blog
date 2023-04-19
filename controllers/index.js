const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Use the homeRoutes for the root path
router.use('/', homeRoutes);

// Use the apiRoutes for all API paths
router.use('/api', apiRoutes);

module.exports = router;
