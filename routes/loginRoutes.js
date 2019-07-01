
const User = require('../models/login.js')
const passport = require('../passportConfig/passport.js')



module.exports = function(app){
  
  app.post('/register', (req, res) => {
    console.log('user signup');
    var username = req.body.user.username
    var email = req.body.user.email
    var password = req.body.user.password
    
    // ADD VALIDATION
            User.findOne({ username: username }, (err, user) => {
                if (err) {
                    console.log('User.js post error: ', err)
                } else if (user) {
                    res.json({error: `Sorry, already a user with the username: ${username}`
                    })
                }
                else {
                    const newUser = new User({
                        username: username,
                        email: email,
                        password: password
                    })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

app.post(
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
            username: req.body.username
        };
        res.send(userInfo);
    }
)

app.get('/register', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})


app.get("/user", (req,res) => {
  if (req.user) {
    res.json({ user: req.user })
} else {
    res.json({ user: null })
}
})

app.post('/user/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})
}


