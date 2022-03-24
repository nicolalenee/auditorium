const router = require('express').Router();
const {Post, User, Profile, Comment } = require('../models');

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

      res.render("homepage", { posts, loggedIn: req.session.loggedIn});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'title', 'content', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    if(!dbPostData) {
      res.status(404).json({ message: 'No post was found with this id' });
      return;
    }
    const post = dbPostData.get({ plain: true });
    res.render('post', {
      post,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
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
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  res.render("new-post", {loggedIn: req.session.loggedIn});
});

router.get("/comment", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  res.render("postcomments", {loggedIn: req.session.loggedIn})
});

// render the settings page
router.get("/settings", (req, res) => {
  if(!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  res.render("settings", {loggedIn: req.session.loggedIn});
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
    res.render('post', {post, loggedIn: req.session.loggedIn});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// allow users to logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});
module.exports = router;