const DiscountSchema = require("../models/discountSchema");


const createDiscountController=async(req,res)=>{
    let { couponName,couponAmount,couponRang,couponType}=req.body
    
    // console.log(couponName,couponAmount,couponRang,couponType);
    let existingData= await DiscountSchema.find({couponName:couponName})
    if(existingData.length>0){
        res.send("Coupon is already exists")
    }else{
        if(couponAmount>100){
            if(couponType=="Percent"){
                res.send("Invaild discount")
            }
            
        }else if(couponAmount>50){
            if(couponType=="Delivery"){
                res.send("Invaild delivery") 

            }
        }else{
            let data=new DiscountSchema({
                couponName:couponName,
                couponAmount:couponAmount,
                couponRang:couponRang,
                couponType:couponType
            })
            data.save()
            res.send(data)

        }
    }
    
    
    

}
module.exports=createDiscountController