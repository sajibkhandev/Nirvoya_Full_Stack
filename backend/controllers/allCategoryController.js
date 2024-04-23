const catSchema = require("../models/catSchema");



const allCategoryController=async(req,res)=>{

    let allcategory=await catSchema.find()
    res.send(allcategory)
    console.log(allcategory);
    
    

}
module.exports=allCategoryController