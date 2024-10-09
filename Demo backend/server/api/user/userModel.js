const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name : {type:String,default:""},
    email : {type:String,default:""},
    password : {type:String,default:""},
    userType:{type:Number,default:""}, //1->Admin,2-> channel partner, 3-> Student/lead
    createdAt :{type:Date,default:Date.now()},
    status:{type:Boolean,default:true}
})
module.exports = new mongoose.model("users",userSchema)