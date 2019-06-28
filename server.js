var express = require("express");
var app = express();
var cors = require("cors")


// passport
var passport = require("passport")
var session = require('express-session')
var LocalStrategy = require('passport-local').Strategy
// var flash = require('connect-flash')
// var passportConfig = require('./config/passport')
// passportConfig = require("./config/passport")
// application = require("")
SALT_WORK_FACTOR = 12

var PORT = process.env.PORT || 8080;


var db = require("./models");




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
// app.use(express.cookieParser())


app.use(express.static("public"));

app.use(session({  // Session MW
  secret: 'fucking-hell', // Use a more secure secret LOL
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 100 * 60 * 60 * 24 * 30 } // = 30 days
}))

// Passport intialization
app.use(passport.initialize());
app.use(passport.session());

// Our passport stategy
passport.use(new LocalStrategy(
  function (email, password, done) {
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
passport.serializeUser(function (user, done) { // Standered Serialize for session
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
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
function loggedIn(req, res, next) {
  if (req.user) { // if request contains the user
    next(); // call next
  } else {
    res.status(403).send("Unauthorized")  // throwing unauthorized
  }
}

// Protected route
app.get('/', loggedIn, (req, res) => {
  res.send("YOU ARE AUTHENTICATED");
})



// Handle logout
app.get('/logout', (req, res) => {
  req.logout();
  res.send("YOU ARE NOW LOGGED OUT")
})


require("./routes/loginRoutes")(app);
require("./routes/itemRoutes")(app);
// require("./routes/cartRoutes")(app)


console.log('=------------------------------------------------------------------------------')

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
