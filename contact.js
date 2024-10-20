const path=require('path');
const express=require('express');
const router=express.Router();
const rootdir=require('../util/path');
const { readFileSync } = require('fs');
const contactuscontroller=require('../controller/user');
router.get('/contactus',contactuscontroller.postUsercontact);
router.post('/success',contactuscontroller.getSuccessPage);
module.exports=router;

