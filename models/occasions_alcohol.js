module.exports = function(sequelize, DataTypes) {
  var OccasionAlcohol = sequelize.define("OccasionAlcohol", {},{
      timestamp : false,
      createdAt: false,
      updatedAt: false,
    });

  return OccasionAlcohol;
};