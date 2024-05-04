const express=require("express")
const createCategoryController = require("../../controllers/createCategoryController")
const allCategoryController = require("../../controllers/allCategoryController")
const createSubCategoryController = require("../../controllers/createSubCategoryController")
const createProductController = require("../../controllers/createProductController")
const _=express.Router()
const multer  = require('multer')
const allProductController = require("../../controllers/allProductController")
const createVariantController = require("../../controllers/createVariantController")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
    
  }
})

const upload = multer({ storage: storage })

_.post("/createcategory",createCategoryController)
_.post("/createsubcategory",createSubCategoryController)
_.post("/createproduct", upload.single('avatar'),createProductController)
_.post("/createvariant", upload.single('avatar'),createVariantController)



_.get("/allCategory",allCategoryController)
_.get("/allProduct",allProductController)



module.exports=_
