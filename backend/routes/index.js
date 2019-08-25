var fs        = require('fs');
var path      = require('path');
var Models = require('../models');
var Express = require('express');
var basename  = path.basename(__filename);
var router = Express.Router();

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    router.use('/' + path.parse(file).name, require('./' + file));
    console.log(file + ' is loaded in router');
  });

module.exports = router;
