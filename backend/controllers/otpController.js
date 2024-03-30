const userSchema = require("../models/userSchema");

const otpController=async(req,res)=>{
    const{email,otp}=req.body
    let otpFind=await userSchema.findOne({email:email})
    if(otpFind){
        if(!otpFind.isEmailVerified && otpFind.otp==otp){
        await userSchema.findOneAndUpdate({email:email},{otp:"",isEmailVerified:true})
        res.send({success:"Email Verified"})
    }else{
        res.send({error:"Otp not match"})
    }
    }

}
module.exports=otpController