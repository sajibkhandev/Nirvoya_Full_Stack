const userSchema = require("../models/userSchema");
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');

const changePasswordController=async(req,res)=>{
    const {token,password}=req.body
    var decoded = jwt.verify(token, 'sajib');
    
    await userSchema.findOneAndUpdate({email:decoded.email},{password:password})

}
module.exports=changePasswordController