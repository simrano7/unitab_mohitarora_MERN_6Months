const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
    programName : {type:String,default:""},
    universityId: {type:mongoose.Schema.Types.ObjectId,ref:"universities"},
    programImage : {type:String, default:""},
    ProgramDuration : {type:String, default:""},
    description : {type:String,default:""},
    success:{type:Boolean,default:true},
    createdAt :{type:Date,default:Date.now()},
})

module.exports = new mongoose.model('Programs', programSchema);