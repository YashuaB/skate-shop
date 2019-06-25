module.exports = function(sequelize, DataTypes){
  
  var Inventory = sequelize.define("Inventory", {
     itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
      // validate:{
      //   //is there going to validation needed here  
      // }
    },
     quantity:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
  
      // brands: {
      //   type: DataTypes.STRING,
      //   allowNull: true  
      // },
      // clothingType: {
      //   type: DataTypes.STRING,
      //   allowNull: true
      // },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      // sex: {
      //   type:DataTypes.STRING,
      //   allowNull: true
      // },
      // size: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true
      // },
      
      // category:{
      //     type: DataTypes.STRING,
      //     allowNull:true
      //   },
      
      isAdded: {
        type: DataTypes.BOOLEAN,
        allowNull:true
      },
      isPurchased: {
        type: DataTypes.BOOLEAN,
        allowNull:true
      },
     
      

  })

  return Inventory;
}