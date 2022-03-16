const router = require("express").Router();
const { Post, User } = require("../models");

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

      res.render("homepage", { posts, loggedIn: req.session.loggedIn });
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

module.exports = router;