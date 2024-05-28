const mongoose = require('mongoose');
const { Schema } = mongoose;
const discountSchema = new Schema({
    couponName:{
        type:String,
        required:true,
        unique:true
    },
    couponAmount:{
        type:Number,
        required:true,

    },
    couponRang:{
        type:String,
        required:true,
        

    },
    couponType:{
        type:String,
        required:true,
        

    },
    

})

module.exports=mongoose.model('Discount', discountSchema)