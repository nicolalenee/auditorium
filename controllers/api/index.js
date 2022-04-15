const router = require('express').Router();

const commentRoutes = require('./comment-routes');
const tagRoutes = require('./tag-routes');
const postTagRoutes = require('./post-tag-routes');
const professionsRoutes = require('./professions-routes');
const userRoutes = require('./user-routes');

router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/tag', tagRoutes);
router.use('/post-tag', postTagRoutes);
router.use('/professions', professionsRoutes);

module.exports = router;