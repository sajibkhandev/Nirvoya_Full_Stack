const productSchema = require("../models/productSchema");

const createVariantController=async(req,res)=>{

    let {name,avatar,regularprice,sellprice,productid}=req.body
    
    console.log(name,regularprice,sellprice,productid);
    let existProduct=await productSchema.findOne({name:name})
    if(existProduct){
        res.send({error:"already exists this product"})
    }else{
        let product=new productSchema({
            name:name,
            image:`/uploads/${req.file.filename}`,
            regularprice:regularprice,
            sellprice:sellprice,
            productid:productid

        })
        product.save()
        res.send({success:"Product have make"})
    }

}

module.exports=createVariantController