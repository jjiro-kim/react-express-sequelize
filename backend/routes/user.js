var Config = require('../config/config.json');
var Express = require('express');
var router = Express.Router();
var Sequelize = require('sequelize');
var dev = Config.development;

console.log(dev);

var sequelize =new Sequelize (
  dev.database,
  dev.username,
  dev.password,
  {
    'host': dev.host,
    'port': dev.port,
    'dialect': dev.dialect
  }
);

var User = sequelize.define('USER', {
  USER_ID: {
    type: Sequelize.STRING,
    unique: true,
    primaryKey: true
  },
  USER_NM: {
    type: Sequelize.STRING
  }
}, {
    freezeTableName: true,
    timestamps: false
  }
);

router.get('/', function(req, res) {
  User.findAll().then(function(results){
    res.json(results);
  });
});

router.get('/:id', function(req, res) {
  res.send('Received a GET request, param:' + req.params.id);
});

router.post('/', function(req, res) {
  res.send('Received a GET request, param:' + req.params.id);
});

module.exports = router;
