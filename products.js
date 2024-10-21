const path=require('path');
const rootdir=require('../util/path');
const Product=require('../models/product.js');
exports.getAddProductPage = (req,res,next)=>{
    Product.fetchAll((products)=>{
        res.sendFile(path.join(rootdir,'views','add-product.html'),(err)=>{
            console.log(err);
            next();
       })
    });
    
}
  
exports.postAddProductPage= (req,res,next)=>{
    const product= new Product(req.body.title, req.body.size);
    product.save();
    res.redirect('/');
}

exports.getShopPage=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','shop.html'))
}  