const router = require('express').Router();
const { registerPrompt } = require('inquirer');
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth')


router.get('/', (req, res) => {
  Comment.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Comment.findOne({
    include: [
      {
        model: User,
        attributes: ['id', 'display_name', 'account_type']
      }
    ]
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No user found with this id '});
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  if(req.session) {
  Comment.create({
    id: req.body.id,
    comment_text: req.body.comment_text,
    post_id: req.body.post_id,
    user_id: req.session.user_id
  })
  .then(dbCommentData => res.json(dbCommentData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}
});

router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {

  Comment.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;