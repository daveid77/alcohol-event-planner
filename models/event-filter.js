module.exports = function(sequelize, DataTypes) {
  var EventFilter = sequelize.define("EventFilter", {
    event : DataTypes.INTEGER,
    type : DataTypes.TEXT,
    name: DataTypes.INTEGER,
     },  {
      timestamp : false,
      createdAt: false,
      updatedAt: false,
     }); 
  return EventFilter;
};