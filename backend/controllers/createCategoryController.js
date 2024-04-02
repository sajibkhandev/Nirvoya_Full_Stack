const CatSchema = require("../models/catSchema");

const createCategoryController=async(req,res)=>{

    let {name,ownerId}=req.body
   console.log(name);
   console.log(ownerId);

}
module.exports=createCategoryController