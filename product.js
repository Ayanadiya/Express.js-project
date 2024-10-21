const fs=require('fs');
const rootdir=require('../util/path');
const path = require('path');
const p=path.join(rootdir,'data','products.json');

module.exports= class Product {
    constructor(t,s)
    {
        this.title=t;
        this.size=s;
    }
    save()
    {      
        fs.readFile(p,(err,filecontent)=>{
               let products=[];
               if(!err)
               {
                products=JSON.parse(filecontent);
               }
               products.push(this);
               fs.writeFileSync(p, JSON.stringify(products),(err)=>{
                console.log(err);
               })
        })
    }
    static fetchAll(cb){
        fs.readFile(p,(err,filecontent)=>{
            if(err)
            {
                cb([]);
            }
            cb( JSON.parse(filecontent));
        })
    }
}