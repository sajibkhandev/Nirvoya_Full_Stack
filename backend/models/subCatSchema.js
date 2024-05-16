const mongoose = require('mongoose');
const { Schema } = mongoose;
const subCatSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AllUser"
    },
    catId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    status:{
        type:String,
        enum:["waiting","rejected","approved"],
        default:"waiting"
    }

})

module.exports=mongoose.model('SubCategory', subCatSchema)