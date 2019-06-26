var db = require("../models")
var passport = require("passport")

module.exports = function (app) {


  app.post("/register", function (req, res) {
    console.log(req.body)
    db.User.create({
      username: req.body.user.username,
      email: req.body.user.email,
      password: req.body.user.password
    })
      .then(function (dbUser) {
        res.json(dbUser);
      })
      .catch(function (err, res) {
        if (err) {
          console.log(err)
        } else { res.send("done") }
      })

  })



  function loggedIn(req, res, next) {
    if (req.user) { // if request contains the user
      next(); // call next
    } else {
      res.status(403).send("Unauthorized")  // throwing unauthorized
    }
  }

  app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/register'
  }))


  app.get("/login", function (req, res) {

    res.send("done")
  })

  app.get("http://localhost:8080/register", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("http://localhost:8080/login");
    }

  });



  // Protected route
  app.get('http://localhost:8080/shop', loggedIn, (req, res) => {
    res.send("YOU ARE AUTHENTICATED");
  })



  // Handle logout
  app.get('/logout', (req, res) => {
    req.logout();
    res.send("YOU ARE NOW LOGGED OUT")
  })


}