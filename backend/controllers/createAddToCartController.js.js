const AddToCart = require("../models/addToCartSchema");

const createAddToCartController=async(req,res)=>{
    let {productId,quantity,cartOwnerId}=req.body
    console.log(productId,quantity,cartOwnerId);

   

}
module.exports=createAddToCartController