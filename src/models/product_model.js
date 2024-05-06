const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
      name: {type: String, required:true },
      price: {type: Number, required:true, min:100 },
      categories : [String], //array of string for multiple category
      imageUrl:[String],
      createdBy: { type: mongoose.Types.ObjectId, ref:"Admin"},
      inStock : {type: Boolean , default: true},
      dateAdded: {type: Date,default:Date.now()}
})

module.exports =  mongoose.model( "Product", ProductSchema);