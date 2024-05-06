const  ProductModel = require("../models/product_model");

const createProduct = (req, res) => {

  const productData = {
        name: req.body.name,
        price: req.body.price,
        imageUrl: req.body.images,
        categories: req.body.categories,
  }

  if(!productData.name || productData.name.length <1 ){
    return res.status(400).json({type:"error" , message: "product name is required"})
  }

  else if(isNaN(productData.price) || productData.price < 100){
    return res.status(400).json({type:"error" , message: "product price must be a number and at least 100"})
  }
  
  else if( !productData.categories|| productData.categories <1){
    return res.status(400).json({type:"error" , message: "product categories is required"})
  }

  else if( !productData.imageUrl || productData.imageUrl <1){
    return res.status(400).json({type:"error" , message: "product must have atleast one image"})
  }

ProductModel.create(productData)
.then((product) => {
  return res.status(201).json({type: "success" , message: "Product created successfully.",
  productId: product._id
})}) 

.catch((err) =>{
  return res.status(500).json({type: 'error',message:'we cant add product at this time', errMsg:err});
});

}

const getAllProduct = (req, res) =>{
ProductModel.find({})
.then(products =>{
  res.status(200).json({type: "success", products})
})
.catch(err =>{
  res.status(500).json({type: "error", message: "error fetching the products"})
})
}

 const getOneProduct = (req, res) =>{
ProductModel.findById(req.params.id, {name: true, price: true})
.then((product) =>{
  res.status(200).json({type: "success", product});
})
.catch((err) =>{
  res.status(500).json({type: "error", message: "error fetching the product."})
})
 }

 const updateProduct = (req, res) =>{

  const id = req.params.id;

  const productData = {
      name: req.body.name,
      price: req.body.price,
      imageUrl: req.body.images,
      categories: req.body.categories,
}
ProductModel.findByIdAndUpdate(id, productData)
.then(() =>{
  res.status(200).json({message: "product update successfully"})
})
.catch((error) =>{
  res.status(500).json({message:"server error", error})
})

 }

const deleteProduct = (req, res) =>{
  const id = req.params.id;
  ProductModel.findByIdAndDelete(id)
  .then(()=>{
    res.status(200).json({message: "product deleted successfully"})
  })
  .catch((error)=>{
    res.status(500).json({message: "server error", error})
  })
}

module.exports = {
 create:  createProduct,
 fetctAll: getAllProduct,
 fetchOne: getOneProduct,
 updateProduct,
 deleteProduct
}