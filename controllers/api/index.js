const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const testRoutes = require('./testRoutes');
const userRoutes = require('./userRoutes');

// Set up API routes
router.use('/comments', commentRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/test', testRoutes);
router.use('/users', userRoutes);

module.exports = router;