module.exports = function(sequelize, DataTypes) {
  var Occasion = sequelize.define("Occasion", {
    event : DataTypes.STRING,
    userid : DataTypes.INTEGER,
     },  {
      timestamp : false,
      createdAt: false,
      updatedAt:false,
     });

   Occasion.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Occasion.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Occasion;
  };