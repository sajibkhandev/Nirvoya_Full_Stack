const userSchema = require("../models/userSchema");
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const passwordValidation = require("../helpers/passwordValidation");

const changePasswordController=(req,res)=>{
    const {token,password}=req.body
    if(passwordValidation(password)){
        res.send({error:"Strong Password"})
    }else{
    var decoded = jwt.verify(token, 'sajib');
    bcrypt.hash(password, 10, async function(err, hash) {
    await userSchema.findOneAndUpdate({email:decoded.email},{password:hash})
    });
        res.send({success:"Password has changed"})
        
    }
    

}
module.exports=changePasswordController