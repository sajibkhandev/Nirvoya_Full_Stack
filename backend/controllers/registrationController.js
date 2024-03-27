const blankInput = require("../helpers/blankInput");
const emailValidation = require("../helpers/emailValidation");
const passwordValidation = require("../helpers/passwordValidation");
const userSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');
const axios =require('axios')
const otpGenerator = require('otp-generator')
const NodeMailer = require("./../helpers/nodemailer");


const registrationController=async(req,res)=>{
    const {username,email,password}=req.body
    if(blankInput(username)){
        res.send({error:"Username is required"})
    }else if(blankInput(email)){
        res.send({error:"Email is Required"})
    }else if(emailValidation(email)){
        res.send({error:"Valid email Required"})
    }else if(blankInput(password)){
        res.send({error:"Password is Required"})
    }else if(passwordValidation(password)){
        res.send({error:"Strong Password"})
    }
    else{
        let existingData=await userSchema.find({email:email})
        
        if(existingData.length>0){
            res.send({error:`${email} is already existied`})
        }else{
            let otp=otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, upperCaseAlphabets:false,digits:true });
            bcrypt.hash(password, 10, async function(err, hash) {
            let data=new userSchema({
            username:username,
            email:email,
            password:hash,
            otp:otp
        })
        NodeMailer({email,otp})
        data.save()
        res.send({
            username:data.username,
            email:data.email,
            role:data.role
        });
});
        }
    }
}
module.exports=registrationController