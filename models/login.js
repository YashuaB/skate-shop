var bcrypt = require("bcryptjs")

module.exports = function(sequelize, DataTypes){
  
  var User = sequelize.define("User", {
     username: {
      type: DataTypes.STRING,
      unique:true,
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

  User.prototype.validPassword = function(password){
    return bcrypt.compareSync(password,this.password)
  }


  User.addHook("beforeCreate", function(user,options){
    return user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
  })
  return User
}