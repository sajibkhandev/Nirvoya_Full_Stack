const userSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');

const loginController=async(req,res)=>{
    const {email,password}=req.body
    let findData=await userSchema.findOne({email:email})
    if(findData){
        if(findData.isEmailVerified==true){
            
            bcrypt.compare(password, findData.password, function(err, result) {
                // result == true
                if(result){
                   
                    
                    res.send({
                        data:
                        {
                        id:findData._id,
                        username:findData.username,
                        email:findData.email,
                        role:findData.role,
                        isEmailVerified:findData.isEmailVerified,   
                       },
                       success:"Login Successfull"
                       
                    })
                }else{
                    res.send({error:"Credintial Inviled"})
                }
            });
        }else{
            res.send({error:"Email is not Verified"})
        }
    }else{
        res.send({error:"Creditial Inviled"})
    }
}
module.exports=loginController