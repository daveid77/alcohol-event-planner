var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name : DataTypes.STRING,
    googleID: DataTypes.INTEGER,
     },  {
      timestamp : false,
      createdAt: false,
      updatedAt: false,
    });

  User.associate = function(models) {
      User.hasMany(models.Occasion, {
      onDelete: "cascade"
    });
  };

  return User;
};