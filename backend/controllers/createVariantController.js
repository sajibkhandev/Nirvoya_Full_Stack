const Variant = require("../models/variantSchema");

const createVariantController=async(req,res)=>{

    let {name,avatar,regularprice,sellprice,productid}=req.body
    
   
    let existProduct=await Variant.findOne({name:name})
    if(existProduct){
        res.send({error:"already exists this product"})
    }else{
        let product=new Variant({
            name:name,
            image:`/uploads/${req.file.filename}`,
            regularprice:regularprice,
            sellprice:sellprice,
            productid:productid

        })
        product.save()
        res.send({success:"Variant Successfull Created"})
    }

}

module.exports=createVariantController