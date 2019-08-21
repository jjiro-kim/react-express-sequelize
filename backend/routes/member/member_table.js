// var Config = require('../../config/config.json');
// var Sequelize = require('sequelize');
// var dev = Config.development;
//
// var sequelize = new Sequelize (
//   dev.database,
//   dev.username,
//   dev.password,
//   {
//     'host': dev.host,
//     'port': dev.port,
//     'dialect': dev.dialect
//   }
// );
//
// var Member = sequelize.define('MEMBER', {
//   ID: {
//     type: Sequelize.STRING(20),
//     unique: true,
//     primaryKey: true
//   },
//   NAME: {
//     type: Sequelize.STRING(5)
//   },
//   PHONE: {
//     type: Sequelize.STRING(13)
//   }
// }, {
//     freezeTableName: true,
//     paranoid: true,
//     timestamps: true,
//     underscored: false,
//     comment: '멤버 정보'
//   }
// );
