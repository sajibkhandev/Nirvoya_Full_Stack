const secureApi=(req,res,next)=>{
   
    if(req.headers.authorization==process.env.SECURE_API){
        next()
    }else{
        res.status(400)
        res.send("Secure Api")
    }


}
module.exports=secureApi