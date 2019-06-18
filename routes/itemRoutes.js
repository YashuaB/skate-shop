var db = require("../models")

module.exports = function(app) {

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

  app.get("/inventory/pants/:pant?", function (req, res) {
    if (req.params.pant) {
      db.Inventory.findOne({
        where: {
          clothingType: req.params.pant
        }
      }).then(function (dbInventory) {
        res.json(dbInventory)
      })
    } else {
      db.Inventory.findAll({

      }).then(function (dbInventory) {
        res.json(dbInventory)
      })

    }
  })

  app.get("/inventory/shirts/:shirt?", function (req, res) {
    if (req.params.shirt) {
      db.Inventory.findOne({
        where: {
          clothingType: req.params.shirt
        }
      }).then(function (dbInventory) {
        res.json(dbInventory)
      })
    } else {
      db.Inventory.findAll({

      }).then(function (dbInventory) {
        res.json(dbInventory)
      })

    }
  }) 

  // app.get("/inventory/decks/:deck?"), function (req, res) {
  //   if (req.params.deck) {
  //     db.Inventory.findOne({
  //       where: {
  //         itemName:req.params.deck
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
  // } 

  app.get("/inventory/price", function (req, res) {
    if (req.params.price) {
      db.Inventory.findOne({
        where: {
          price:req.params.price
        }
      }).then(function (dbInventory) {
        res.json(dbInventory)
      })
    } else {
      db.Inventory.findAll({

      }).then(function (dbInventory) {
        res.json(dbInventory)
      })

    }
  })

  app.get("/inventory/category/:category?", function (req, res) {
    if (req.params.price) {
      db.Inventory.findOne({
        where: {
        category:req.params.category
        }
      }).then(function (dbInventory) {
        res.json(dbInventory)
      })
    } else {
      db.Inventory.findAll({

      }).then(function (dbInventory) {
        res.json(dbInventory)
      })

    }
  }) 

}