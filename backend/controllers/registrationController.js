const blankInput = require("../helpers/blankInput");
const emailValidation = require("../helpers/emailValidation");
const passwordValidation = require("../helpers/passwordValidation");
const userSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');
const axios =require('axios')
const otpGenerator = require('otp-generator')
const {sendEmail} =require('./../helpers/nodemalierFunction')




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
            
            let otp = otpGenerator.generate(6, { lowerCaseAlphabets:false
            ,upperCaseAlphabets :false,specialChars :false });

            bcrypt.hash(password, 10, async function(err, hash) {
            let data=new userSchema({
            username:username,
            email:email,
            password:hash,
            otp:otp
        })
        const emailBody = `<a href="http://localhost:5173/otp/${email}/${otp}">Click for verify</a>`;

        await sendEmail(email,"Verified Email",emailBody)
       
      
        data.save()
        // res.send({
        //     username:data.username,
        //     email:data.email,
        //     role:data.role
        // });
        res.send({success:"Registration successfull"})
});
        }
    }
}
module.exports=registrationController