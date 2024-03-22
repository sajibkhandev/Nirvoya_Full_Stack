const express=require("express")
const _=express.Router()

_.get("/registration",(req,res)=>{
    res.send("this is from routes")


})


module.exports=_
