const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
    universityName :{type:String, default:""},
    universityImage :{type:String, default:""},
    description : {type:String,default:""},
    status:{type:Boolean,default:true},
    createdAt :{type:Date,default:Date.now()},

})
exports.module = new mongoose.model("universities",universitySchema)