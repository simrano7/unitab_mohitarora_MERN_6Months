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

getsingle = (req,res)=>{
    var errmsgs = []
    if(!req.body._id){
        errmsgs.push("_id is required");
    }
    if(errmsgs.length>0){
        res.send({
            message:errmsgs,
            status:422,
            success:false
        })
    }
    else{
        Program.findOne({_id:req.body._id})
        .then((data)=>{
            if(data == null){
                res.send({
                    status:404,
                    success:false,
                    message:"Data not found",
                    data:data
                })
            }
            else{
                res.send({
                    status:200,
                    success:true,
                    message:"Single program details loaded",
                    data:data
                })
            }
        })
        .catch((err)=>{
            res.send({
                status:500,
                success:false,
                message:"Internel server error",
                msgerr :err
            })
        })

    }
}

updatedata =(req,res)=>{
    var errmsgs = []
    if(!req.body._id){
        errmsgs.push("_id is required");
    }
    if(errmsgs.length>0){
        res.send({
            message:errmsgs,
            status:422,
            success:false
        })
    }
    else{
        Program.findOne({_id:req.body._id})
        .then((ress)=>{
            console.log(ress);
            if(ress == null){
                res.send({
                    message:"data not found",
                    success:false,
                    status:404
                })
                }
            else{
                // update data
                if(req.body.programName )
                    ress.programName = req.body.programName
                if(req.body.universityId)
                ress.universityId = req.body.universityId
                if(req.body.description)
                ress.description=req.body.description
                if(req.body.programImage )
                    ress.programImage = req.body.programImage
                if(req.body.programDuration )
                    ress.programDuration = req.body.programDuration
                ress.save()
                .then((updateddata)=>{
                    res.send({
                        message:"Data updated successfully",
                        status:200,
                        data:updateddata
                    })
                })
                .catch((err)=>{
                    res.send({
                        message:"Internel server error",
                        status:500,
                        errmsg:err
                    })
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

deleteOne = (req,res)=>{
    Program.deleteOne({_id:req.body._id})
    .then((data)=>{
        console.log(data);
        res.send({
            message:"Data Deleted successfully",
            status:200,
            data:data
        })
    })
    .catch((err)=>{
        res.send({
            message:"Internel server error",
            status:500,
            errmsg:err
        })
    })
}

changeStatus = (req,res)=>{
    var errMsgs = []
    if(!req.body._id)
        errMsgs.push("_id is required")
    if(!req.body.status)
            errMsgs.push("status is required")
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{
    Program.findOne({_id:req.body._id})
    .then((programdata)=>{
        // if(programdata == null){
        // }
            // console.log(programdata);
            if(req.body.status)
            programdata.status = req.body.status
            programdata.save()
            .then(updatedata=>{
                console.log(updatedata);
                res.send({
                    status:200,
                    success:true,
                    message:"Status changed",
                    data:updatedata
                })
            })
            .catch(err=>{
                console.log(err);
                res.send({
                    status:500,
                    success:false,
                    message:"Internel server error",
                })
            })
    })
    .catch((err)=>{
        // console.log(err);
        
    })
}
}

module.exports = {add, all, getsingle, updatedata, deleteOne, changeStatus }
