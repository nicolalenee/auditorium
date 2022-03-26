const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes);
module.exports = router;