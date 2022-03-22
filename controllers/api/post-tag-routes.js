const router = require('express').Router();
const { PostTag, Post, Tag } = require('../../models');
const withAuth = require('../../utils/auth');



router.get ('/', (req, res) => {
  PostTag.findAll({
    include: {
      model: Post,
      attributes: ['title', 'content', 'post_id']
    }
  })
  .then(dbPostTagData => res.json(dbPostTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  PostTag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Post,
      attributes: ['title', 'content', 'post_id']
    }
  })
    .then(dbPostTagData => res.json(dbPostTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
  PostTag.create({
    tag_name: req.body.tag_name
  })
    .then(dbPostTagData => res.json(dbPostTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  PostTag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbPostTagData => {
      if (!dbPostTagData){
        res.status(404).json({message: 'No tag found with this id'})
        return;
      }
      res.json(dbPostTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  PostTag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbPostTagData => {
    if (!dbPostTagData) {
      res.status(404).json({message: 'No tag found with this id'})
      return;
    }
    res.json(dbPostTagData);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;