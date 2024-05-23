const Cart = require("../models/addToCartSchema");



const allCartController=async(req,res)=>{

    let cart=await Cart.find().populate("productId")
    res.send(cart)
    
    
    

}
module.exports=allCartController