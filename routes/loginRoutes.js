var db = require("../models")


module.exports = function(app){


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

  // app.get("/login/user"){
    
  // }
}