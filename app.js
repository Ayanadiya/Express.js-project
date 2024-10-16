const http = require('http');
const express=require('express');
const adminroutes=require('./routers/admin');
const shoproutes=require('./routers/shop');
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin',adminroutes);
app.use(shoproutes);
app.use((req,res,next)=>{
     res.status(404).send('<h1>Page not found</h1>')
})
app.listen(4000);