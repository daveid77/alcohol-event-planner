module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    type : DataTypes.STRING,
     },  {
      timestamp : false,
      createdAt: false,
      updatedAt:false,
     });

  Event.associate = function(models) {

    Event.belongsToMany(models.Alcohol, {
      through: {
        model: models.EventAlcohol
      }
    });
  };
  return Event;
  };

