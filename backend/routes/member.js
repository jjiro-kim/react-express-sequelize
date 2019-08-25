var Express = require('express');
var Models = require('../models');
var Member = Models.MEMBER;
var router = Express.Router();

router.get('/', function(req, res) {
  Member.findAll().then(function(results){
    res.json(results);
  });
});

router.get('/:id', function(req, res) {
  Member.create({
    ID: req.params.id,
    NAME: req.params.id
  })
});

router.post('/', function(req, res) {
  res.send('Received a POST request, param:' + req.params);
});

module.exports = router;
