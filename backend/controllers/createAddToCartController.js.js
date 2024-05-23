const AddToCart = require("../models/addToCartSchema");

const createAddToCartController=async(req,res)=>{
    let {productId,quantity,cartOwnerId}=req.body
    let existingData=await AddToCart.find({productId:productId})
    if(existingData.length>0){
        let data2= await AddToCart.findOneAndUpdate({_id:existingData[0]._id},{quantity:existingData[0].quantity+1},{new:true})
        console.log(data2);
    }else{
        let data=new AddToCart({
            productId:productId,
            quantity:1,
            cartOwnerId:"6645ff1f3504cf890f74dec4"
          })
          data.save()
        res.send({status:"done"})
    }

   

}
module.exports=createAddToCartController