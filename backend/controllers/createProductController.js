const productSchema = require("../models/productSchema");

const createProductController=async(req,res)=>{

    let {name,discription,image}=req.body
    console.log(name,discription,image);
    let existProduct=await productSchema.findOne({name:name})
    if(existProduct){
        res.send({error:"already exists this product"})
    }else{
        let product=new productSchema({
            name:name,
            discription:discription,
            image:image
        })
        product.save()
        res.send({success:"Product have make"})
    }

}

module.exports=createProductController