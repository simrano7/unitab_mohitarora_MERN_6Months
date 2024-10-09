const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    name : {type:String,default:""},
    email : {type:String,default:""},
    password : {type:String, default:""},
    contact:{type:String,default:""},
    program:{type:String,default:""},
    state:{type:String, default:""},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    createdAt :{type:Date,default:Date.now()},
    status:{type:Boolean,default:true}
})
module.exports = new mongoose.model("student",studentSchema)