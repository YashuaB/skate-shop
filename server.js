const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./models/index.js') 
const MongoStore = require('connect-mongo')(session)
const cors = require("cors")
const app = express()


const PORT = 8080


 

// MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'))
app.use(cors())
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

if (process.env.NODE_ENV === "production"){
	app.use(express.static("client/build"))
}
// Routes
require('./routes/loginRoutes')(app)
require('./routes/itemRoutes')(app)


// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})








// http://localhost:5000     │
// │   - On Your Network:  http://192.168.1.2:5000  
























































