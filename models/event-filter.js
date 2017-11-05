module.exports = function(sequelize, DataTypes) {
  var EventFilter = sequelize.define("EventFilter", {
    event Id : DataTypes.INTEGER,
    alcohol Id : DataTypes.INTEGER,
     },  {
      timestamp : false,
      createdAt: false,
      updatedAt: false,
     }); 
  return EventFilter;
};