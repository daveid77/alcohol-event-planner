module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    type : DataTypes.STRING,
     },  {
      timestamp : false,
      createdAt: false,
      updatedAt:false,
     });

  return Event;
  };

