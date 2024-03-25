const blankInput = require("../helpers/blankInput");
const emailValidation = require("../helpers/emailValidation");
const passwordValidation = require("../helpers/passwordValidation");
const userSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');


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
        bcrypt.hash(password, 10, function(err, hash) {
             let data=new userSchema({
            username:username,
            email:email,
            password:hash
        })
        data.save()
        res.send({
            username:data.username,
            email:data.email
        });

    
});
       
    }
}
module.exports=registrationController