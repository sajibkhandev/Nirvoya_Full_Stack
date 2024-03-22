const express=require("express")
const _=express.Router()
const auth=require('./api')
const apiBaseUrl=process.env.API_BASE_URL

_.use(apiBaseUrl,auth)
_.use(apiBaseUrl,(req,res)=>res.send("Invalid api call"))


module.exports=_
