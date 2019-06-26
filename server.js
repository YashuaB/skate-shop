var express = require("express");
var app = express();
var cors = require("cors")
var session = require('express-session')
var passport = require("passport")
var env = require("dotenv").config()



var PORT = process.env.PORT || 8080;


var db = require("./models");




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
// app.use(express.cookieParser())


app.use(express.static("public"));

// app.use(session({  // Session MW
//   secret: 'fucking-hell', // Use a more secure secret LOL
//   resave: true,
//   saveUninitialized: true,
//   cookie: { maxAge: 100 * 60 * 60 * 24 * 30} // = 30 days
// }))

// Passport intialization
require("./passportConfig/passport")
app.use(passport.initialize());
// app.use(passport.session());


require("./routes/loginRoutes")(app);
require("./routes/itemRoutes")(app);
// require("./routes/cartRoutes")(app)


db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
