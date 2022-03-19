const router = require('express').Router();
const {Post, User, Profile } = require('../models');

// render the homepage and the most recent cards to the 'newest' section
router.get("/", (req, res) => {
  Post.findAll({
    order: [["id", "DESC"]],
    limit: 3,
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: User,
        attributes: ["display_name", "account_type"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", { posts});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// render the login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// render the signup page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

// render the new post page
router.get("/new-post", (req, res) => {
  res.render("new-post");
});

// render the settings page
router.get("/settings", (req, res) => {
  res.render("settings");
});

// render the listings page
router.get('/listings', (req, res) => {

  Post.findAll({
    order: [['id', 'DESC']],
    attributes: ['id', 'title', 'content', 'created_at'],
    include: [
      {
        model: User,
        attribute: ['display_name', 'account_type']
      }
    ]
  }).then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('listings', {posts});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})


router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'title', 'content', 'created_at'],
    include: [
      {
        model: User,
        attribute: ['display_name', 'account_type']
      }
    ]
  }).then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id'});
      return;
    }
    const post = dbPostData.get({ plain: true });
    res.render('post', {post});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});
module.exports = router;