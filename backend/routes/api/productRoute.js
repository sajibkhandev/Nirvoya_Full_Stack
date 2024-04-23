const express=require("express")
const createCategoryController = require("../../controllers/createCategoryController")
const allCategoryController = require("../../controllers/allCategoryController")
const _=express.Router()

_.post("/createcategory",createCategoryController)



_.get("/allCategory",allCategoryController)



module.exports=_
