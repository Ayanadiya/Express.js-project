const path=require('path');
const rootdir=require('../util/path');
exports.postUsercontact=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact.html'))
}
exports.getSuccessPage=(req,res,next)=>{
    res.status(401).sendFile(path.join(rootdir,'views','contactsubmit.html'));
}