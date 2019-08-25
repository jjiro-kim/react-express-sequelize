var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var Config = require('../config/config');
var basename  = path.basename(__filename);
var dev = Config.development;
var dbSchema = {};

var sequelize = new Sequelize (dev);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize.import(path.join(__dirname, file));
    dbSchema[model.name] = model;
  });

Object.keys(dbSchema).forEach(model => {
  if (dbSchema[model].associate) {
    dbSchema[model].associate(db);
  }
});

module.exports = dbSchema;
