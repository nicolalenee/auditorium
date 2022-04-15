const router = require('express').Router();
const { User, Post, Profile } = require('../../models');
const withAuth = require('../../utils/auth');


// create a new account
router.post("/", (req, res) => {
  User.create({
    display_name: req.body.display_name,
    account_type: req.body.account_type,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// allow users to login
router.post('/login', (req, res) => {
    User.findOne({
      where: {
        username: req.body.username
      }
    }).then (dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that username!' });
        return;
      }

      // Verify user
      const validPassword = dbUserData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json({ user: dbUserData, message: 'You are now logged in!'})
      });
    });
})

// allows users to logout
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


// allows users to create a new account
  router.put('/:id', withAuth, (req, res) => {

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


// // allow users to update their profile
//   router.put('/settings/:id', withAuth, (req, res) => {
//     Profile.update(req.body, {
//       individualHooks: true,
//       where: {
//         user_id: req.session.user_id
//       }
//     })
//       .then(dbProfileData => {
//         if (!dbProfileData) {
//           res.status(404).json({ message: 'No profile found with this id' });
//           return;
//         }
//         res.json(dbProfileData);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });


// // allow users to delete their account
//   router.delete('/:id', withAuth, (req, res) => {
//     User.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(dbUserData => {
//         if (!dbUserData) {
//           res.status(404).json({ message: 'No user found with this id' });
//           return;
//         }
//         res.json(dbUserData);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });


module.exports = router;
