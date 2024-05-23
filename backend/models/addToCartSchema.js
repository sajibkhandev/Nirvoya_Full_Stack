const mongoose = require('mongoose');
const { Schema } = mongoose;
const addToCartSchema = new Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"

    },
    quantity:{
        type:Number
    },
   
    cartOwnerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AllUser"
    },
   

})

module.exports=mongoose.model('Cart', addToCartSchema)