var db = require("../models")


module.exports = function(app){


  app.post("/register", function(req,res){
    
    db.User.create({
      username: req.body.username,
       email: req.body.email,
       password: req.body.password
    })
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err, res){
        if (err){
          console.log(err)
        }else
        {res.send("done")}
      })
      
  })

  // app.get("/login/user"){
    
  // }
}