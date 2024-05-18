const catSchema = require("../models/catSchema");



const allCategoryController=async(req,res)=>{

    let allcategory=await catSchema.find().populate("subCategoryList")
    res.send(allcategory)
    
    
    

}
module.exports=allCategoryController