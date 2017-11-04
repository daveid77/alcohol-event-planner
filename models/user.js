var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username : DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  });

  User.associate = function(models) {
      User.hasMany(models.Occasion, {
      onDelete: "cascade"
    });
  };

  return User;
};