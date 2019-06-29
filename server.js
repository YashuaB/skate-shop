const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./models/index.js') 
const MongoStore = require('connect-mongo')(session)
// const passport = require('./passportConfig');
const app = express()
const PORT = 8080
// Route requires
const login= require('./routes/loginRoutes')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'something-shaddy', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

const passport = require('passport')
const LocalStrategy = require('./passportConfig/jwtConfig.js')
const User = require('./models/login.js')

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
// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use('/login', login)

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})

































































/////////////////////////////////////////////////////////////////////
//                           sequelize                             //
/////////////////////////////////////////////////////////////////////

// var express = require("express");
// var app = express();
// var cors = require("cors")

// // var session = require('express-session')
// var passport = require("passport")
// var env = require("dotenv").config()



// var PORT = process.env.PORT || 3001;


// var db = require("./models");




// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors())



// app.use(express.static("public"));

// // app.use(session({  // Session MW
// //   secret: 'fucking-hell', // Use a more secure secret LOL
// //   resave: true,
// //   saveUninitialized: true,
// //   cookie: { maxAge: 100 * 60 * 60 * 24 * 30} // = 30 days
// // }))

// // Passport intialization
// // require("./passportConfig/passport")
// // app.use(passport.initialize());
// // app.use(passport.session());



// require("./routes/loginRoutes")(app);
// require("./routes/registerRoutes")(app)
// require("./routes/itemRoutes")(app);
// // require("./routes/cartRoutes")(app)


// db.sequelize.sync({ force: false }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });
