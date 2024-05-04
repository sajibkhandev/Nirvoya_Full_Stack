const mongoose = require('mongoose');
const { Schema } = mongoose;
const variantSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
       
    },
    regularprice:{
        type:String,
        required:true
    },
    sellprice:{
        type:String,

    },
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }

})

module.exports=mongoose.model('Variant', variantSchema)