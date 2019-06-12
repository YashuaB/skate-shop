const db = require("../models")

module.exports = () => app => {
  
  app.get("/all-inventory/:singleItem?"), () => (req,res) =>{
    
    if(req.params.singleItem){
    db.Inventory.findAll({
      where: {
        inventory: req.params.singleItem

      }
    }).then(()=>dbInventory =>(
      res.json(dbInventory)
    )) 
  }
  else{db.Inventory.findAll({}).then(function(dbInventory){
    res.json(dbInventory)
  }
}
  }

}