const catSchema = require("../models/catSchema");



const allCategoryController=async(req,res)=>{

    let allcategory=await catSchema.find().populate("ownerId")
    res.send(allcategory)
    
    
    

}
module.exports=allCategoryController