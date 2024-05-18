const SubCatSchema = require("../models/subCatSchema");
const CategorySchema=require("../models/catSchema")

const createSubCategoryController=async(req,res)=>{

    let {name,ownerId,catId}=req.body
    const existsName=await SubCatSchema.findOne({name:name})
    if(existsName){
        res.send({error:"already exists this product"})

    }else{
        let makeProduct=new SubCatSchema({
            name:name,
            ownerId:ownerId,
            catId:catId
        })
        makeProduct.save()
       await CategorySchema.findOneAndUpdate({_id:catId},{ $push: { subCategoryList:makeProduct._id  }})

        res.send({success:"product has make but waiting for admin approval"})
    }

}
module.exports=createSubCategoryController