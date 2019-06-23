var bcrypt = require("bcrypt-nodejs")

module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [6, 25]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2],
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 20]
      }
     },
    // classMethod: {
    //   validPassword: function (password, passwd, done, user) {
    //     bcrypt.compare(password, passwd, function (err, isMatch) {
    //       if (err) console.log(err)
    //       if (isMatch) {
    //         return done(null, user)

    //       } else {
    //         return done(null, false)
    //       }
    //     })
    //   }
    // }
   

  },
  // User.addHook("beforeCreate", function(user, fn){
  //   var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function(err, hash){
  //     if(err) return next(err)
  //     user.password = hash
  //     return fn(null,user)

  //   })
  // })
  )

  return User
}