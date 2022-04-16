const router = require('express').Router();
const { User, Profile, Post, Professions } = require('../models');
const withAuth = require('../utils/auth')

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
  Promise.all([
    Professions.findAll({
      attributes: ['id', 'name']
    }),
    Profile.findOne({
      where: {
        user_id: req.session.user_id
      },
      attributes: ['id', 'display_name', 'website_url', 'bio', 'media', 'location', 'phone_number', 'user_id'],
      include: [
        {
          model: Professions,
          attributes: ['id', 'name', 'user_id', 'profile_id']
        }
      ]
    }),
  ])
  .then((data) => {
    // get professions information from the array and get plain version to render professions dropdown menu
    const professionInfo = data[0];
    const professions = professionInfo.map(profession => profession.get({ plain: true }))

    // get profile information to render so user can see previous settings
    const profileInfo = data[1];
    const profile = profileInfo.dataValues;
    // render the settings page and pass information to handlebars template
    res.render('settings', {professions, profile, loggedIn: req.session.loggedIn})
  })

  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// allow users to update their profile
router.put('/', (req, res) => {
  Profile.update(req.body, {
    individualHooks: true,
    where: {
      user_id: req.session.user_id
    }
  })
  .then(dbProfileData => {
    if (!dbProfileData) {
      res.status(404).json({ message: 'No profile found with this id!'});
      return;
    }
    res.json(dbProfileData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})



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