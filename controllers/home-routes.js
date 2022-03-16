const res = require('express/lib/response');
const { User } = require('../models');
const { route } = require('./api');

const router = require('express').Router();

// render the homepage
router.get('/', (req, res) => {
  res.render('homepage');
});

// render the login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// render the signup page
router.get('/signup', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

// render the new post page
router.get('/new-post', (req, res) => {
  res.render('new-post');
})

// render the settings page
router.get('/settings', (req, res)=> {
  res.render('settings');
});

module.exports = router;