module.exports = (sequelize, DataTypes) => {
var Member = sequelize.define('MEMBER', {
    ID: {
        type: DataTypes.STRING(20),
        unique: true,
        primaryKey: true
      },
      NAME: {
          type: DataTypes.STRING(5)
        },
        PHONE: {
            type: DataTypes.STRING(13)
          }
        }, {
              freezeTableName: true,
              paranoid: true,
              timestamps: true,
              underscored: false,
              comment: '멤버 정보'
            }
        );

  return Member;
};
