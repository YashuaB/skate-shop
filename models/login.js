module.exports = function(sequelize, DataTypes){
  
  var User = sequelize.define("User", {
     username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[6,25]
      }

    },
     email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[2],
        isEmail:true
      }
    },
     password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[4,20]
      }
    }

  })

  return User
}