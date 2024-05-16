const SubCategory = require("../models/subCatSchema");



const allCategoryController=async(req,res)=>{
    

    let allcategory=await SubCategory.find({catId:req.query.slug}).populate("ownerId")
    res.send(allcategory)
    
    
    

}
module.exports=allCategoryController