module.exports = function(sequelize, DataTypes) {

 var EventAlcohol = sequelize.define("EventAlcohol",{}, {
      timestamp : false,
      createdAt: false,
      updatedAt: false,
    });

  return EventAlcohol;
};