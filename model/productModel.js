const mongoose = require('mongoose');

const productSchema= mongoose.Schema({
    title : {type: String, required: true},
   price: {type:String, required: true},
   imageUrl : {type:String, required: true},
   category: {type:String, required: true},
   description: {type: String, required: true},
    time : {type: String, default: new Date().toLocaleTimeString(), required: true},
    date: {type: Date,  default: Date.now, required: true}
},{

  versionkey: false

})

const  ProductModel = mongoose.model("product" , productSchema);

module.exports = {ProductModel}