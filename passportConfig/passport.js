const passport = require('passport')
const LocalStrategy = require('./jwtConfig.js.js')
const User = require('../models/login.js')

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log('*** serializeUser called, user: ')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { _id: user._id })
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called')
	User.findOne(
		{ _id: id },
		'username',
		(err, user) => {
			console.log('*** Deserialize user, user:')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)
})

//  Use Strategies 
passport.use(LocalStrategy)

module.exports = passport










































// var bcrypt = require("bcrypt")
// var passport = require("passport"), 
// jwtSecret = require("../passportConfig/jwtConfig.js"),
//   localStrategy = require('passport-local').Strategy,
//   db = require("../models")
//   JWTstratgey = require("passport-jwt").Strategy,
//   ExtractJWT = require("passport-jwt").ExtractJWT;

//               // var flash = require('connect-flash')
//               // var passportConfig = require('./config/passport')
//               // passportConfig = require("./config/passport")
//               // application = require("")
// var BCRYPT_SALT_ROUNDS = 12
// console.log("what is define are", JWTstratgey )
// console.log("what is define are", ExtractJWT )

// passport.use(
//   'register',
//   new localStrategy(
//     {
//       usernameField: 'username',
//       passwordField: 'password',
//       session: false,
//     },
//     (username, password, done) => {
//       try {
//         db.User.findOne({
//           where: {
//             username: username,
//           },
//         }).then(user => {
//           if (user !== null) {
//             console.log('username already taken')
//             return done(null, false, { message: 'username already taken' })
//           } else {
//             bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
//               db.User.create({ username, password: hashedPassword }).then(user => {
//                 console.log('user created')

//                 return done(null, user)
//               })
//             })
//           }
//         })
//       } catch (err) {
//         done(err)
//       }
//     }
//   )
// )

// passport.use(
//   'login',
//   new localStrategy({
//     usernameField: 'username',
//     passwordField: 'password',
//     session: false,
//   },
//     (username, password, done) => {
//       try {
//         db.User.findOne({
//           where: {
//             username: username
//           }
//         }).then(user => {
//           if (user === null) {
//             return done(null, false, { message: "bad username" })
//           } else {
//             bcrypt.compare(password, user.password).then(response => {
//               if (response !== true) {
//                 console.log('password do not match')
//                 return done(null, false, { message: 'password do not match' })
//               }
//               console.log('user found and authenticated')
//               return done(null, user)
//             })
//           }
//         })
//       } catch (err) {
//         done(err)
//       }
//     }

//   )
// )

// var opts = {
//   jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
//   secretOrKey: jwtSecret.secret
// }

// passport.use(
//   'jwt',
//   new JWTstratgey(opts, (jwt_payload, done) =>{
//     try { 
//       db.User.findOne({
//         where: {
//           username: jwt_payload.id,
//         },
//       }).then(user => {
       
//           if (user){
//             console.log('user found in db in passport')

//             done(null, user)
//           }else {
//             console.log(' user not found in db')
//             done(null, false)
//           }
//       })
//     } catch (err){
//       done(err)
//     }
//   })
// )