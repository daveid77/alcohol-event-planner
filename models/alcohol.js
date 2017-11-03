module.exports = function(sequelize, DataTypes) {
  var Alcohols = sequelize.define("alcohol", {
    type : DataTypes.STRING,
    name : DataTypes.TEXT,
    image : DataTypes.TEXT,
     },  {
      timestamp : false,
      createdAt: false,
      updatedAt:false,
     });

   Alcohols.associate = function(models) {
    Alcohols.belongsToMany(models.Occasions, 
        {through : models.OccasionsAlcohols} 
     });
     return Alcohols;
  };

