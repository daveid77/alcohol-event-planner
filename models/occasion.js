var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Occasion = sequelize.define("Occasion", {
    name: DataTypes.STRING,
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  });

   Occasion.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Occasion.belongsTo(models.User, {
      // this foreign key reference caused insert errors
      // foreignKey: {
      //   allowNull: false
      // }
    });
    Occasion.belongsToMany(models.Alcohol, {
      through: {
        model: models.OccasionAlcohol
       }
    });   
  };
  return Occasion;
};
