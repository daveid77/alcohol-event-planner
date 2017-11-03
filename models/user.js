module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("user", {
    username : DataTypes.STRING,
    password: DataTypes.STRING,
     });

    User.associate = function(models) {
      Users.hasMany(models.Occasions, {
      onDelete: "cascade"
    });
  };

  return Users;
};