var Express = require('express');
var Models = require('../models');
var Member = Models.MEMBER;
var router = Express.Router();

router.get('/', function(req, res) {
  Member.findAll().then(function(results){
    res.json(results);
  });
});

router.get('/:ID', function(req, res) {
  Member.findOne({
    where: {
      ID: req.params.id
    }
  }).then(function(result){
    res.json(result);
  });
});

router.post('/', function(req, res) {
  console.log(req);
  Member.upsert({
    ID: req.body.ID,
    NAME: req.body.NAME
  }).then(function(result) {
    res.json(result);
  });
});

router.put('/', function(req, res) {
  Member.upsert({
    ID: req.params.ID,
    NAME: req.params.NAME
  }).then(function(result) {
    res.json(result);
  });
});

router.delete('/', function(req, res) {
  Member.destroy({
    ID: req.params.ID
  }).then(function(result) {
    res.json(result);
  });
});

module.exports = router;
