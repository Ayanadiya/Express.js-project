const path=require('path');
const express=require('express');
const router=express.Router();
const rootdir=require('../util/path');
router.get('/add-product',(req,res,next)=>{
    console.log('In another middleware');
    res.sendFile(path.join(rootdir,'views','add-product.html'),(err)=>{
        console.log(err);
        next();
    });
})
router.post('/product',(req,res,next)=>{
        console.log(req.body);
        res.redirect('/');
})
module.exports=router;