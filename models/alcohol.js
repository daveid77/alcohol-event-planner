module.exports = function(sequelize, DataTypes) {
  var Alcohol = sequelize.define("Alcohol", {
    type : DataTypes.STRING,
    name : DataTypes.TEXT,
    image : DataTypes.TEXT,
     },  {
      timestamp : false,
      createdAt: false,
      updatedAt:false,
     });
  return Alcohol;
  };