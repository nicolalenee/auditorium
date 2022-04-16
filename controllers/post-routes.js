const router = require('express').Router();
const { Post, Profile, User } = require('../models');
const withAuth = require('../utils/auth');

// render the posts page and get all posts in descending order
router.get('/', (req, res) => {
  Post.findAll({
    order: [['id', 'DESC']],
    attributes: ['id', 'title', 'content', 'created_at'],
    include: [
      {
        model: User,
        attribute: ['id','username', 'account_type']
      }
    ]
  }).then(dbPostData => {
  
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('listings', {posts, loggedIn: req.session.loggedIn});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// render the new post page
router.get("/new-post", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  res.render("new-post");
});

// allow user to create a new post
router.post("/", (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// allow a user to update posts
router.put('/:id', withAuth, (req, res) => {
  Post.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// allow user to delete their post by its id
router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
      user_id: req.session.user_id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;