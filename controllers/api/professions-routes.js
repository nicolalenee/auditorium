const router = require('express').Router();
const { Professions } = require('../../models');
const withAuth = require('../../utils/auth');

router.get ('/', (req, res) => {
  Professions.findAll({
    include: {
      model: Post,
      attributes: ['title', 'content', 'post_id']
    }
  })
  .then(dbProfessionsData => res.json(dbProfessionsData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Post,
      attributes: ['title', 'content', 'post_id']
    }
  })
    .then(dbProfessionsData => res.json(dbProfessionsData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
})

router.put('/:id', withAuth, (req, res) => {
  Professions.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbProfessionsData => {
      if (!dbProfessionsData){
        res.status(404).json({message: 'No tag found with this id'})
        return;
      }
      res.json(dbProfessionsData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Professions.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbProfessionsData => {
    if (!dbProfessionsData) {
      res.status(404).json({message: 'No tag found with this id'})
      return;
    }
    res.json(dbProfessionsData);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});