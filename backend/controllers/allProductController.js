const productSchema = require("../models/productSchema");



const allProductController=async(req,res)=>{

    let allproduct=await productSchema.find()
    res.send(allproduct)
    
    
    

}
module.exports=allProductController