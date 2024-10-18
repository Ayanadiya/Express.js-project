const path=require('path');
const express=require('express');
const router=express.Router();
const rootdir=require('../util/path');
const { readFileSync } = require('fs');
router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact.html'))
})
module.exports=router;