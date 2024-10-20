//const path=require('path');
const express=require('express');
const router=express.Router();
//const rootdir=require('../util/path');
const productcontroller=require('../controller/products',);
router.get('/',productcontroller.getShopPage);
router.post('/',productcontroller.getShopPage);
module.exports=router;