const Program = require("./programModel")

add = (req,res) =>{
    let program = new Program()
    program.universityId = req.body.universityId
    program.programName = req.body.programName
    program.duration = req.body.duration
    program.image = req.body.image
    program.description = req.body.description
    program.save()
    .then((data)=>{
        res.json({
            status:200,
            success:true,
            message:"Program inserted successfully",
            data:data
        })
    })
    .catch((err)=>{
        res.json({
            status:500,
            success:false,
            message:err,
        })
    
    })

}


getall = (req,res)=>{
    Program.find()
    .then ((progdata)=>{
        res.send({
            status:200,
            success:true,
            message:"All programs fetched successfully",
            data:progdata
        })
    })
    .catch((err)=>{
        res.json({
            status:500,
            success:false,
            message:"Internal serevr error",
            errmsg:err
        })
    })
}

getsingle = (req, res)=>{
    program.findOne({_id :req.body._id})
    .then((data)=>{
        console.log(data)
        res.json({
            status:200,
            success:true,
            message:"Single program Loaded successfully",
            data:data
        })
    })
    .catch((err)=>{
        res.send({
            status:500,
            success:false,
            message:"Internal server error",
            errmsg:err
        })
    })
}
module.exports = {
    add,
    getall,
    getsingle,
}
