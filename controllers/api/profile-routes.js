const router = require('express').Router();
const { Profile } = require('../../models');
const  filterByQuery = require('../../lib/profiles');
const { profiles } = require('../../seeds/profile-seeds');
const { sequelize } = require('../../models/User');
const withAuth = require('../../utils/auth')


router.get('/', (req, res) => {
  Profile.findAll({
  })
    .then(dbProfileData => res.json(dbProfileData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

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

router.put('/:id', withAuth, (req, res) => {
  Profile.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbProfileData => {
      if (!dbProfileData[0]) {
        res.status(404).json({ message: 'No profile found with this id' });
        return;
      }
      res.json(dbProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;