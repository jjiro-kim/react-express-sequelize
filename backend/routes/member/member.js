var Express = require('express');
// var Member = require('./member_table');
var router = Express.Router();

// Sync 테스트 후 분리 예정
var Config = require('../../config/config.json');
var Sequelize = require('sequelize');
var dev = Config.development;

console.log(dev);

var sequelize = new Sequelize (
  dev.database,
  dev.username,
  dev.password,
  {
    'host': dev.host,
    'port': dev.port,
    'dialect': dev.dialect
  }
);

var Member = sequelize.define('MEMBER', {
  ID: {
    type: Sequelize.STRING(20),
    unique: true,
    primaryKey: true
  },
  NAME: {
    type: Sequelize.STRING(5)
  },
  PHONE: {
    type: Sequelize.STRING(13)
  }
}, {
    freezeTableName: true,
    paranoid: true,
    timestamps: true,
    underscored: false,
    comment: '멤버 정보'
  }
);

Member.sync();

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
