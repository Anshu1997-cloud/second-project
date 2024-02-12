const mongoose = require('mongoose');
const {ProductModel} = require('../model/productModel')


 const getProduct = async(req, res) => {
      try{
       const {id} = req.params;
       const products = await ProductModel.find(id);
       res.send(products)
      }catch(error){
        res.send({ "err" : error});
      }
} 

 const createProduct = async(req,res) => {
      const data = req.body;
      const Product = new ProductModel(data);
      await Product.save();
      console.log(req.body);
      res.send({ "msg" :"New product added successfully"});
}

 const updateProduct = async(req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try{
        const query = await ProductModel.findByIdAndUpdate({_id:id}, payload)
        console.log(query)
     }catch(err){
        console.log(err)
     res.send({"err" : "something went wrong"})
     }
}

const deleteProduct = async (req, res) => {
   try {
     const productId = req.params.productId;
     // Check if productId is a valid ObjectId
     if (!mongoose.Types.ObjectId.isValid(productId)) {
       return res.status(400).json({ message: 'Invalid product ID' });
     }
     // Find the product by its ObjectId and delete it
     const deletedProduct = await ProductModel.findByIdAndDelete(productId);
     if (!deletedProduct) {
       return res.status(404).json({ message: 'Product not found' });
     }
     return res.status(200).json({ message: 'Product deleted successfully', data: deletedProduct });
   } catch (error) {
     console.error('Error deleting product:', error);
     return res.status(500).json({ message: 'Internal server error' });
   }
 };
module.exports = {
    getProduct, createProduct,updateProduct,deleteProduct 
}