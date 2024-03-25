const blankInput = require("../helpers/blankInput");
const emailValidation = require("../helpers/emailValidation");
const passwordValidation = require("../helpers/passwordValidation");
const userSchema = require("../models/userSchema");


const registrationController=(req,res)=>{
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
        let data=new userSchema({
            username:username,
            email:email,
            password:password
        })
        data.save()
        res.send(data);
    }
}
module.exports=registrationController