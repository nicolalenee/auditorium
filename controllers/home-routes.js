const router = require('express').Router();
const {Post, User, Profile, Comment, Professions } = require('../models');

// render the homepage and the most recent cards to the 'newest' section
router.get("/", (req, res) => {
  Post.findAll({
    order: [["id", "DESC"]],
    limit: 3,
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: User,
        attributes: ['id', 'username', 'account_type']
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      console.log('hit this route', posts)

      res.render("homepage", { posts, loggedIn: req.session.loggedIn});
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
  res.render("post", {loggedIn: req.session.loggedIn})
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
        attribute: ['id','username', 'account_type']
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

// user will view their own profile
router.get('/profile', (req, res) => {
  User.findOne({
    where: {
      id: req.session.user_id
    },
    attributes: ['id', 'username', 'account_type'],
    include: [
      {
        model: Post,
        attributes: ['id','title', 'content', 'created_at'],
        include: [
          {
            model: User,
            attributes: ['id', 'username', 'account_type']
          }
        ]
      },
      {
        model: Profile,
        attributes: ['id', 'display_name', 'location', 'website_url', 'bio', 'media', 'location', 'phone_number', 'user_id']
      }
    ]
  })
  .then(dbProfileData => {
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    }
    const userInfo = dbProfileData.get({ plain: true })
    console.log(userInfo)
    console.log(userInfo);
    res.render('profile', {userInfo, loggedIn: req.session.loggedIn});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});


module.exports = router;