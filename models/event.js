module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    type : DataTypes.STRING,
     },  {
      timestamp : false,
      createdAt: false,
      updatedAt:false,
     });
  return Events;
  };

