var db = require("../models")
var passport = require("passport")

module.exports = function(app){

  app.post('/login', passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/register'}))

  app.post("/register", function(req,res){
    console.log(req.body)
    db.User.create({
      username: req.body.user.username,
       email: req.body.user.email,
       password: req.body.user.password
    })
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err, res){
        if (err){
          console.log(err,)
        }else
        {res.send("done")}
      })
      
  })


  function loggedIn(req, res, next) {
    if (req.user) { // if request contains the user
        next(); // call next
    } else {
        res.status(403).send("Unauthorized")  // throwing unauthorized
    }
}
  app.get("/login", function(req,res){
   
    res.send("done")
  })

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
//
  app.get("http://localhost:3001/shop", loggedIn, function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.send("done")
  });
//
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be 
  //redirected to the signup page
  app.get("/members",loggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
  // app.get("/login/user"){
    
  // }
}