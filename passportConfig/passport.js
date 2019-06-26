var passport = require("passport")
var LocalStrategy = require('passport-local').Strategy
var db = require("../models")
// var flash = require('connect-flash')
// var passportConfig = require('./config/passport')
// passportConfig = require("./config/passport")
// application = require("")
SALT_WORK_FACTOR = 12

// Our passport stategy
passport.use(new LocalStrategy(
  function(email, password, done) {
      db.User.findOne({  // Using sequelize model function
          where: { // Take an object with options where self explanatory
              'email': email
          }
      }).then(function (user) { // Sequelize return a promise with user in callback
          if (user == null) { // Checking if user exsists
              return done(null, false)  // Standerd Passport callback
          }

          if (password == user.password) { // use your password hash comparing logic here for security
              return done(null, user) // Standerd Passport callback
          }
          return done(null, false) // Standerd Passport callback
      })
  }
))

// for maintaining session
passport.serializeUser(function(user, done) { // Standered Serialize for session
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  db.User.findOne({ // Using sequelize model functoin
      where: {
          'id': id
      }
  }).then(function (user) {
      if (user == null) {
          done(new Error('Wrong user id.'))
      }

      done(null, user) // Standerd deserailize callback
  })
})

// Post request handling route for login



// Standerd middleware taking req, res and next as parameters
