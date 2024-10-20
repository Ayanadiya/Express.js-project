const http = require('http');
const express=require('express');
const path=require('path');
const adminroutes=require('./routers/admin');
const shoproutes=require('./routers/shop');
const contactroutes=require('./routers/contact');
const errorcontroller=require('./controller/error404');
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminroutes);
app.use(shoproutes);
app.use(contactroutes)
//app.use('/success',(req,res,next)=>{
   //  res.status(401).sendFile(path.join(__dirname,'views','contactsubmit.html'));
//})
app.use(errorcontroller.error404Page); 
app.listen(4000);