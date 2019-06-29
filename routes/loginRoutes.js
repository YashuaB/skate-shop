const express = require('express')
const router = express.Router()
const User = require('../models/login.js')
const passport = require('../passportConfig/passport.js')

router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router













































/////////////////////////////////////////////////////////////////////
//                           sequelize                             //
/////////////////////////////////////////////////////////////////////




// var session = require("express-session")

// var db = require("../models")




// module.exports = function(app){

//   app.use(session({  
//     secret: 'fucking-hell', 
//     resave: true,
//     saveUninitialized: true,
//     cookie: { maxAge: 100 * 60 * 60 * 24 * 30} // = 30 days
//   }))
  

//   app.post("/register", function (req, res) {
//     console.log(req.body)
//     db.User.create({
//       username: req.body.user.username,
//       email: req.body.user.email,
//       password: req.body.user.password
//     })
//       .then(function (dbUser) {
//         res.json(dbUser);
//       })
//       .catch(function (err, res) {
//         if (err) {
//           console.log(err)
//         } else { res.send("done") }
//       })
  
//   })
  
  
  
//   function loggedIn(req, res, next) {
//     if (req.user) { // if request contains the user
//       next(); // call next
//     } else {
//       res.status(403).send("Unauthorized")  // throwing unauthorized
//     }
//   }
  
//                 // app.post('/login', passport.authenticate('local', {
//                 //   successRedirect: '/',
//                 //   failureRedirect: '/register'
//                 // }))
                
  
//   app.post('/login', function(req, res) {
//     db.User.findOne({
//       where:{
//         username: username
//       }
//     }).then( user => {
//       if(user){
//         req.session.userLogged 
      
//       } else {
//         res.send("wrong user info")
//       }
//     })
//             // var user = {
//             //   user: req.body.username,
//             //   password: req.body.password
//             // }
//      })
    
  
//   app.get("/login", function (req, res) {
  
//     res.send("done")
//   })
  
//   app.get("/register", function (req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/login");
//     }
  
//   });
  
  
  
//           // Protected route
//           // app.get('/shop', loggedIn, (req, res) => {
//           //   res.send("YOU ARE AUTHENTICATED");
//           // })
  
  
  
//   // Handle logout
//   app.get('/logout', (req, res) => {
//     req.logout();
//     res.send("YOU ARE NOW LOGGED OUT")
//   })

// }