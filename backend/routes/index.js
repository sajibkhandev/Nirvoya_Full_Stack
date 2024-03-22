const express=require("express")
const _=express.Router()
const auth=require('./api')
const apiBaseUrl=process.env.API_BASE_URL

_.use(apiBaseUrl,auth)


module.exports=_
