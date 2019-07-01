var db = require("../models")

module.exports = function(app) {

  app.get("/all-inventory", function(req, res){
      db.Inventory.findAll({})
      .then(function (dbInventory) {
        res.json(dbInventory)
      })
    })

  app.get("/all-inventory/:singleItem?", function(req, res){
    if (req.params.singleItem) {
      db.Inventory.findOne({
        where: {
          itemName: req.params.singleItem
        }
      }).then(function (dbInventory){
        res.json(dbInventory)
      })
    }
    else {
      db.Inventory.findAll({}).then(function (dbInventory) {
        res.json(dbInventory)
      })
    }
  })

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
}