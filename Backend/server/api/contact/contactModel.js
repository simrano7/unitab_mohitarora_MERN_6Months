const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    Name : {type:String,default:""},
    email:{type:String, default:''},
    subject : {type:String, default:""},
    univesityId:{type:String, default:""},
    programId:{type:String, default:""},
    message:{type:String, default:""},
    status : {type:String, default:""},
    createdAt :{type:Date,default:Date.now()},
})

module.exports = new mongoose.model('Contact', contactSchema);
