const University = require("./universityModel")
add = (req,res)=>{
    var errMsg =[];
    if(!req.body.universityName){
        errMsg.push("university name is required");
    }
    if(!req.file){
        errMsg.push("university Image is required")
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
    University.findOne({universityName:req.body.universityName})
    .then(data=>{
        console.log(data);
        if(data == null){
    let universityObj = new University()
    universityObj.universityName = req.body.universityName
    universityObj.universityImage = "universities/"+req.file.filename
    universityObj.description = req.body.description
    universityObj.save()
        .then((unidata)=>{
            res.json({
                status:200,
                success:true,   
                message:"data inserted successfully!!",
                data:unidata
            })
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                message:"Internel server error!!",
                errmsg:err
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
        .catch(err=>{
            consol.log(err);
        })        
         
}
}

all = (req,res)=>{
    University.find(req.body)
    .then((unidata)=>{
        res.send({
            status:200,
            success:true,
            message:"Data loaded!!",
            data:unidata
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
        University.findOne({_id:req.body._id})
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
                    message:"Single university details loaded",
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
        University.findOne({_id:req.body._id})
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
                if(req.body.universityName )
                    ress.universityName = req.body.universityName
                if(req.body.universityImage)
                ress.universityImage = req.body.universityImage
                if(req.body.description)
                ress.description=req.body.description
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
    University.deleteOne({_id:req.body._id})
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
    University.findOne({_id:req.body._id})
    .then((universitydata)=>{
        // if(universitydata == null){
        // }
            // console.log(universitydata);
            if(req.body.status)
            universitydata.status = req.body.status
            unversitydata.save()
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

module.exports = {add, all, getsingle, updatedata, deleteOne, changeStatus}