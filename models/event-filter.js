module.exports = function(sequelize, DataTypes) {
  var EventFilter = sequelize.define("EventFilter", {
    eventId : DataTypes.INTEGER,
    alcoholId : DataTypes.INTEGER,
     },  {
      timestamp : false,
      createdAt: false,
      updatedAt: false,
     }); 
  return EventFilter;
};