const CatSchema = require("../models/catSchema");

const createCategoryController=async(req,res)=>{

    let {name,ownerId}=req.body
    const existsName=await CatSchema.findOne({name:name})
    if(existsName){
        res.send({error:"already exists this product"})

    }else{
        let makeProduct=new CatSchema({
            name:name,
            ownerId:ownerId
        })
        makeProduct.save()
        res.send({success:"product has make but waiting for admin approval"})
    }

}
module.exports=createCategoryController