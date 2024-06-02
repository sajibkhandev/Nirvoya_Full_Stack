const Product = require("../models/productSchema");



const singleProductController=async(req,res)=>{
    let slug=req.params.slug

    let singleProduct=await Product.find({slug:slug})
    res.send(singleProduct)
    
    
    

}
module.exports=singleProductController