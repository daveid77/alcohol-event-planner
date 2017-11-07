module.exports = function(sequelize, DataTypes) {
  var Alcohol = sequelize.define("Alcohol", {
    type : DataTypes.STRING,
    name : DataTypes.TEXT,
    image : DataTypes.TEXT,
    tag : DataTypes.TEXT,
    beerBool: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    liquirBool: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    wineBool: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
     },  {
      timestamp : false,
      createdAt: false,
      updatedAt: false,
    });

   Alcohol.associate = function(models) {
    
    Alcohol.belongsToMany(models.Occasion, {
      through : {
        model: models.OccasionAlcohol
      } 
     });
    Alcohol.belongsToMany(models.Event, {
      through: {
        model: models.EventAlcohol
      }
    });
  };
  return Alcohol;
};


