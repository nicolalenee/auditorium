const router = require('express').Router();
const { Post, Comment, User } = require('../../models');


router.get('/', (req, res) => {
  Post.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  if(req.session) {
    Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id
    })
    .then(dbPostData => {
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  }
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

router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {

  Post.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;