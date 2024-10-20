//const path=require('path');
const express=require('express');
const router=express.Router();
//const rootdir=require('../util/path');
const productcontroller=require('../controller/products',);
router.get('/add-product',productcontroller.getAddProductPage)
router.post('/add-product',productcontroller.postAddProductPage);
module.exports=router; 