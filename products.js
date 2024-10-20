const path=require('path');
const rootdir=require('../util/path');
exports.getAddProductPage = (req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'),(err)=>{
        console.log(err);
        next();
    })
}

exports.postAddProductPage=(req,res,next)=>{
    res.redirect('/');
}

exports.getShopPage=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','shop.html'))
}  