module.exports = function(sequelize, DataTypes) {
  var Alcohol = sequelize.define("Alcohol", {
    type : DataTypes.STRING,
    name : DataTypes.TEXT,
    image : DataTypes.TEXT,
     },  {
      timestamp : false,
      createdAt: false,
      updatedAt:false,
     });

  Alcohol.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Alcohol.hasMany(models.Events, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Alcohol;
  };

