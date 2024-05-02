const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    discription:{
        type:String,
    },
    image:{
        type:String,
       
    }

})

module.exports=mongoose.model('Product', productSchema)