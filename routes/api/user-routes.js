const router = require('express').Router();
const { User, Profile } = require('../../models');
const { sequelize } = require('../../models/User');

// GET 
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET 1 -> needs to be fixed 
router.get('/:id', (req, res) => {
    User.findOne({
      attributes: { exclude: ['password']},
      where: {
        id: req.params.id
      },
      attributes: ['id', 'account_type', 'display_name'],
      include: [
        {
          model: Profile,
          attributes: ['id', 'band_name', 'location']
        }
      ] 
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id '});
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// POST 
  router.post('/', (req, res) => {
    User.create({
      display_name: req.body.display_name,
      account_type: req.body.account_type,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password 
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

router.post('/login', (req, res) => {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then (dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }

      // Verify user
      const validPassword = dbUserData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }

      res.json({ user: dbUserData, message: 'You are now logged in!' })
    });
})

router.post('/logout', (req, res) => {
  if(req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end(); // send a 204 code after the session has ended
    });
  }
  else {
    res.status(404).end();
  }
});


// PUT 1
  router.put('/:id', (req, res) => {

    User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


// DELETE 1
  router.delete('/:id', (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;