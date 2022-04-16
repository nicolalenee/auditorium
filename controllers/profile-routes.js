const router = require('express').Router();
const { User, Profile, Post, Professions } = require('../models');
const withAuth = require('../utils/auth')
const sequelize = require('../config/connection');
// render the profile page and user will view their own profile
router.get('/', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
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
    const userInfo = dbProfileData.get({ plain: true })
    console.log(userInfo);
    res.render('profile', {userInfo, loggedIn: req.session.loggedIn});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});


// render the settings page and allow users to update their information
router.get("/settings", (req, res) => {
  if(!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }

  Professions.findAll({
    attributes: ['id', 'name']
  })
  .then(dbProfessionsData => {
    const professions = dbProfessionsData.get({ plain: true})
    console.log(professions)
    res.render('settings', { professions, loggedIn: req.session.loggedIn })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

// render the settings page and load the professions datalist menu and allows a user to update their profile
router.put("/:id", (req, res) => {
  if(!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  Profile.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    },
    attributes: [
      'id', 
      'display_name', 
      'website_url', 
      'bio', 
      'media', 
      'location', 
      'phone_number', 
      'user_id',
      [sequelize.literal('(SELECT (*) FROM professions'), 'professions']
     ]
  })
  .then(dbProfileData => {
    res.json(dbProfileData);
    res.render('settings', {loggedIn: req.session.loggedIn});
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })  
});

// router.put('/:id', withAuth, (req, res) => {
//   Profile.update(req.body, {
//     individualHooks: true,
//     where: {
//       user_id: req.session.user_id
//     },
//     attributes: ['id', 'display_name', 'website_url', 'bio', 'media', 'location', 'phone_number', 'user_id' ]
//   })
//     .then(dbProfileData => {
//       if (!dbProfileData) {
//         res.status(404).json({ message: 'No profile found with this id' });
//         return;
//       }
//       res.json(dbProfileData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });


router.post('/', withAuth, (req, res) => {
  Profile.create({
    occupation: req.body.occupation,
    industry: req.body.industry,
    display_name: req.body.display_name,
    website_url: req.body.website_url,
    bio: req.body.bio,
    media: req.body.media,
    location: req.body.location,
    phone_number: req.body.phone_number,
    user_id: req.session.user_id
  })
  .then(dbProfileData => res.json(dbProfileData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;