const Program = require("./programModel")

add = (req,res) =>{
    var errMsg = [];
    if (!req.body.universityId){
        errMsg.push("university Id is required")
    }
    if(!req.body.programName){
        errMsg.push("program name is required");
    }
    if(!req.body.programDuration){
        errMsg.push("program duration is required")
    }
    if(!req.body.programImage){
        errMsg.push("program image is required")
    }
    if(!req.body.description){
        errMsg.push("description is required")
    }
    if(errMsg.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsg
        })
    }

    else{
        Program.findOne({programName:req.body.programName})
        .then(data=>{
            console.log(data);
            // duplicate data check
            if(data == null){
                //add
    let program = new Program()
    program.universityId = req.body.universityId
    program.programName = req.body.programName
    program.programDuration = req.body.programDuration
    program.programImage = req.body.programImage
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
    else{
        res.send({
            status:422,
            success:false,
            message:"data already exists!!"
        })
    }
})
.catch(err =>{
    console.log(err);
    
})

}
}


all = (req,res)=>{
    Program.find(req.body)
    .then((data)=>{
        res.send({
            status:200,
            success:true,
            message:"Data loaded!!",
            data:data
        })
    })
    .catch((err)=>{
        res.send({
            status:500,
            success:false,
            message:"Internel server error",
            errmsg:err
        })
    })

}
module.exports = {add, all}
