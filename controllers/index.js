const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const userRoutes = require('./user-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/user', userRoutes);
module.exports = router;