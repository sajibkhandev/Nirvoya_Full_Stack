const userSchema = require("../models/userSchema");
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const changePasswordController=(req,res)=>{
    const {token,password}=req.body
    var decoded = jwt.verify(token, 'sajib');
    bcrypt.hash(password, 10, async function(err, hash) {
    await userSchema.findOneAndUpdate({email:decoded.email},{password:hash})
    
});
    

}
module.exports=changePasswordController