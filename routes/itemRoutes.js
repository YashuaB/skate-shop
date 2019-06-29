
const Item = require("../models/items.js")

module.exports = function(app) {



  app.get("/all-inventory", function(req, res){

    Item.find({}, (err, item) => {
      if (err) {
        console.log('User.js post error: ', err)
      } else if (item) {
        res.json(item)
      }
    })
})



app.get("/all-inventory/:singleItem?", function(req, res){

  Item.findOne({name:req.params}, (err, item) => {
    if (err) {
      console.log('User.js post error: ', err)
    } else if (item) {
      res.json(req.params)
    }
  })
})


app.get("/all-inventory/shirt?", function(req, res){

  Item.find({category:"shirt"}, (err, item) => {
    if (err) {
      console.log('User.js post error: ', err)
    } else if (item) {
      res.json(req.params)
    }
  })
})

app.get("/all-inventory/pants", function(req, res){

  Item.find({category:"pants"}, (err, item) => {
    if (err) {
      console.log('User.js post error: ', err)
    } else if (item) {
      res.json(req.params)
    }
  })
})

app.get("/all-inventory/deck", function(req, res){

  Item.findOne({category:"deck"}, (err, item) => {
    if (err) {
      console.log('User.js post error: ', err)
    } else if (item) {
      res.json(req.params)
    }
  })
})
  
}