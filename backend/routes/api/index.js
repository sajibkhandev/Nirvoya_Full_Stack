const express=require('express')
const _=express.Router()
const authRoute=require('../api/authRoute')
const productRoute=require('../api/productRoute')

_.use("/auth",authRoute)
_.use("/product",productRoute)


module.exports=_
