const express=require("express")
const createCategoryController = require("../../controllers/createCategoryController")
const allCategoryController = require("../../controllers/allCategoryController")
const createSubCategoryController = require("../../controllers/createSubCategoryController")
const createProductController = require("../../controllers/createProductController")
const _=express.Router()

_.post("/createcategory",createCategoryController)
_.post("/createsubcategory",createSubCategoryController)
_.post("/createproduct",createProductController)



_.get("/allCategory",allCategoryController)



module.exports=_
