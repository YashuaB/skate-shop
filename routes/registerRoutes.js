var db = require("../models")
var passport = require("passport")

module.exports = function (app) {

  app.post('/register', (req, res, next) => {
    passport.authenticate('register', (err, user, info) =>{
      if(err){
        console.log(err)
      }
      if ( info !== undefined){
        console.log(info.message)
        res.send(info.message)

      }else {
        req.logIn(user, err => {
          var data = {
            username: user.username,
            email: req.body.email
          }
          db.User.findOne({
            where: {
              username: data.username
            }
          }).then( user => {
            user
            .update({
              email: data.email
            }).then(()=>{
              console.log('user created in db')
              res.status(200).send({message: "user created"})
            })
          })
        })
      }
    })(req,res,next)
  })

  


}