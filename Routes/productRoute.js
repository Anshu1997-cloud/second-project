const express = require('express');
const {getProduct} = require('../controller/product')
const {createProduct} = require('../controller/product')
const {updateProduct} = require('../controller/product')
const {deleteProduct} = require('../controller/product')
const productRouter = express.Router();


productRouter.get('/product' , getProduct)
   
   productRouter.post("/add" , createProduct);
  

productRouter.put("/update/:id" ,updateProduct );
   
   productRouter.delete('/delete/:id' , deleteProduct);



module.exports = {productRouter};