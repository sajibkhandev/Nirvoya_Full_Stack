const express=require("express")
const createCategoryController = require("../../controllers/createCategoryController")
const allCategoryController = require("../../controllers/allCategoryController")
const allSubCategoryContronller = require("../../controllers/allSubCategoryContronller")
const createSubCategoryController = require("../../controllers/createSubCategoryController")
const createProductController = require("../../controllers/createProductController")
const _=express.Router()
const multer  = require('multer')
const allProductController = require("../../controllers/allProductController")
const createVariantController = require("../../controllers/createVariantController")
const createAddToCartController = require("../../controllers/createAddToCartController.js")
const createDiscountController = require("../../controllers/createDiscountController.js")
const allCartController = require("../../controllers/allCartController.js")
const singleProductController = require("../../controllers/singleProductController.js")

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
_.post("/cart",createAddToCartController)
_.post("/createDiscount",createDiscountController)



_.get("/allCategory",allCategoryController)
_.get("/allProduct",allProductController)
_.get("/allSubCategory",allSubCategoryContronller)
_.get("/allCart",allCartController)
_.get("/singleProduct/:slug",singleProductController)



module.exports=_
