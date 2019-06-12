module.exports = function(sequelize, DataTypes){
  
  var Inventory = sequelize.define("Inventory", {
     itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate:{
        //is there going to validation needed here  
      }
    },
     quantity:{
      type: DataTypes.NUMBER,
      allowNull: false
    },
      brands: {
        type: DataTypes.STRING,
        allowNull: false  
      },
      clothingType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sex: {
        type:DataType.STRING,
        allowNull: true
      },
      size: {
        type: DataTypes.NUMBER,
        allowNull: false
      },
      isAdded: {
        type: DataTypes.BOOLEAN,
        allowNull:true
      },
      isPurchased: {
        type: DataTypes.BOOLEAN,
        allowNull:true
      }
      

  })

  return Inventory
}