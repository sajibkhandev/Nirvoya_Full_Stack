const express=require('express')
const _=express.Router()
const registrationRoute=require('../api/registrationRoute')

_.use("/auth",registrationRoute)


module.exports=_
