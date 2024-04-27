const productSchema = require("../models/productSchema");

const createProductController=async(req,res)=>{

    let {name,discription,avatar}=req.body
    
    console.log();
    let existProduct=await productSchema.findOne({name:name})
    if(existProduct){
        res.send({error:"already exists this product"})
    }else{
        let product=new productSchema({
            name:name,
            discription:discription,
            image:`/uploads/${req.file.filename}`
        })
        product.save()
        res.send({success:"Product have make"})
    }

}

module.exports=createProductController