var passport = require("passport")
localStrategy = require('passport-local').Strategy
db = require("../models")
JWTstratgey = require("passport-jwt").Strategy
ExtractJWT = require("passport-jwt").ExtractJWT
var bcrypt = require("bcrypt")
// var flash = require('connect-flash')
// var passportConfig = require('./config/passport')
// passportConfig = require("./config/passport")
// application = require("")
var BCRYPT_SALT_ROUNDS = 12


passport.use(
  'register',
  new localStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false,
    },
    (username, password, done) => {
      try {
        db.User.findOne({
          where: {
            username: username,
          },
        }).then(user => {
          if (user !== null) {
            console.log('username already taken')
            return done(null, false, { message: 'username already taken' })
          } else {
            bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
              db.User.create({ username, password: hashedPassword }).then(user => {
                console.log('user created')

                return done(null, user)
              })
            })
          }
        })
      } catch (err) {
        done(err)
      }
    }
  )
)

passport.use(
  'login',
  new localStrategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false,
  },
    (username, password, done) => {
      try {
        db.User.findOne({
          where: {
            username: username
          }
        }).then(user => {
          if (user === null) {
            return done(null, false, { message: "bad username" })
          } else {
            bcrypt.compare(password, user.password).then(response => {
              if (response !== true) {
                console.log('password do not match')
                return done(null, false, { message: 'password do not match' })
              }
              console.log('user found and authenticated')
              return done(null, user)
            })
          }
        })
      } catch (err) {
        done(err)
      }
    }

  )
)

var opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
  secretOrKey: jwtSecret.secret
}

passport.use(
  'jwr',
  new JWTstratgey(opts, (jwt_payload, done) =>{
    try { 
      db.User.findOne({
        where: {
          username: jwt_payload.id,
        },
      }).then(user => {
       
          if (user){
            console.log('user found in db in passport')

            done(null, user)
          }else {
            console.log(' user not found in db')
            done(null, false)
          }
      })
    } catch (err){
      done(err)
    }
  })
)