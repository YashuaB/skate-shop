const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({

  item: { type: String, unique: false, required: false },
  price: { type: String, unique: false, required: false },
  image: { type: String, unique: false, required: false },
  quantity: { type: String, unique: false, required: false },
  category: { type: String, unique: false, required: false }

})

// Define schema methods


const Inventory = mongoose.model('Inventory', inventorySchema)
module.exports = Inventory








































