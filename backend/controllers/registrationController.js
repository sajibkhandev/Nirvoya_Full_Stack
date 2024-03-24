const blankInput = require("../helpers/blankInput");

const registrationController=(req,res)=>{

    const {username,email,password}=req.body
    if(blankInput(username)){
        res.send({error:"user name is required"})
    }else if(blankInput(email)){
        res.send({error:"email is required"})
    }else if(blankInput(password)){
        res.send({error:"password is required"})
    }

    res.send(req.body);
    
}
module.exports=registrationController