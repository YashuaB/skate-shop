module.exports = function (sequelize, DataTypes) {

  var Inventory = sequelize.define("Inventory", {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        //is there going to validation needed here  
      }
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },


    createdAt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.STRING,
      allowNull: true,
    }


  })

  return Inventory
}