
const Item = require("../models/items.js")

module.exports = function(app) {



  app.get("/all-inventory", (req, res) => {

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


app.get("/all-inventory/shirt?", (req, res) =>{

  Item.find({category:"shirt"}, (err, item) => {
    if (err) {
      console.log('User.js post error: ', err)
    } else if (item) {
      res.json(req.params)
    }
  })
})

app.get("/all-inventory/pants", (req, res) => {

  Item.find({category:"pants"}, (err, item) => {
    if (err) {
      console.log('User.js post error: ', err)
    } else if (item) {
      res.json(req.params)
    }
  })
})

app.get("/all-inventory/deck", (req, res) => {

  Item.findOne({category:"deck"}, (err, item) => {
    if (err) {
      console.log('User.js post error: ', err)
    } else if (item) {
      res.json(req.params)
    }
  })
})
 ////////////////////////////////////////////////////////////// 
/// Sequelize for button need to be mongoose
 //////////////////////////////////////////////////////////////
  app.get("/inventory/:item", function (req, res) {
    const item = req.params.item;
      db.Inventory.findAll({
        where: {
          category: item
        }
      }).then(function (dbInventory) {
        res.json(dbInventory)
      })
  })

  app.get("/inventory/shirts", function (req, res) {
    db.Inventory.findAll({
      where: {
        category: "shirt"
      }
    }).then(function (dbInventory) {
      res.json(dbInventory)
    })
})

app.get("/inventory/decks", function (req, res) {
  debugger;
  db.Inventory.findAll({
    where: {
      category: "decks"
    }
  }).then(function (dbInventory) {
    res.json(dbInventory)
  })
})

  // app.get("/inventory/price", function (req, res) {
  //   if (req.params.price) {
  //     db.Inventory.findOne({
  //       where: {
  //         price:req.params.price
  //       }
  //     }).then(function (dbInventory) {
  //       res.json(dbInventory)
  //     })
  //   } else {
  //     db.Inventory.findAll({

  //     }).then(function (dbInventory) {
  //       res.json(dbInventory)
  //     })

  //   }
  // })

  // app.get("/inventory/category/:category?", function (req, res) {
  //   if (req.params.price) {
  //     db.Inventory.findOne({
  //       where: {
  //       category:req.params.category
  //       }
  //     }).then(function (dbInventory) {
  //       res.json(dbInventory)
  //     })
  //   } else {
  //     db.Inventory.findAll({

  //     }).then(function (dbInventory) {
  //       res.json(dbInventory)
  //     })

  //   }
  // }) 

}