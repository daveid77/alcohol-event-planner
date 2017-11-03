module.exports = function(sequelize, DataTypes) {
  var Occasions = sequelize.define("occasion", {
    event : DataTypes.STRING,
    userid : DataTypes.INTEGER,
     },  {
      timestamp : false,
      createdAt: false,
      updatedAt:false,
     });

   Occasions.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Occasions.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Occasions.associate = function(models) {
      Occasions.belongsToMany(models.Alcohols, 
        {through : models.OccasionsAlcohol} 
  });
  return Occasion;
};
