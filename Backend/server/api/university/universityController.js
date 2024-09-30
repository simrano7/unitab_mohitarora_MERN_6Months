const University = require("./universityModel")
add = (req,res)=>{
    var errMsg =[];
    if (!req.body.universityName){
        errMsg.push("University Name is required")
    }
    if (!req.body.universityImage){
        errMsg.push("University Image is required")
    }
    if (!req.body.description){
        errMsg.push("description Name is required")
    }
    if(errMsg.length > 0){
    return res.json({
        status:400,
        success:false,
        message:errMsg
       })
    }
    else{
        University.findOne({universityName:req.body.universityName})
        .then(unidata=>{
            console.log(data);
            if(unidata == null){
                let universityObj=new university()
                universityObj.universityName = req.body.universityName
                universityObj.universityImage = req.body.universityImage
                universityObj.description = req.body.description
                universityObj.save()
                .then((data)=>{
                   console.log(data)
        res.json({
            status:200,
            success:true,
            message:"University inserted successfully",
            data:data
        })

    })
    .catch((err)=>{
        res.json({
            status:500,
            success:false,
            message:"Internal server error",
            errmsg:err
        })
     })
        }
        else{
            res.send({
                status:422,
                success:false,
                message:"data already exists"
            })
        }
        })
        .catch(err =>{
            console.log("add api error",err);
        })
    }
    
}

getall=(req,res)=>{
    University.find()
    .then((unidata)=>{
        console.log(unidata)
        res.send({
            status:200,
            success:true,
            message:"All universities fetched successfully",
            data:unidata
        })
    })
    .catch(err=>{
        res.send({
            status:500,
            success:false,
            message:"Internal server error occurred",
            errmsg:err,
        })
    })
}

getsingle=(req,res)=>{

    var errmsgs =[]
    if(!req.body._id){
        errmsgs.push("_id is required");
    }
    if(errmsgs.length > 0){
        res.json({
            status:422,
            success:false,
            message:errmsgs
        })
    }
    University.findOne({_id:req.body._id})
    .then((data)=>{
        console.log(data)
        res.json({
            status:200,
            success:true,
            message:"University fetched successfully",
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

updatedata = (req,res)=>{
    University.findOne({_id:req.body._id})
    .then((ress)=>{
        console.log(ress)
        ress.universityName = req.body.universityName
        ress.universityImage = req.body.universityImage
        ress.description = req.body.description
        ress.save()
        .then((updatedata)=>{
            console.log(updatedata)
            res.send({
                message:"Data updated successfully",
                status:200,
                data:updatedata
            })
        })
        .catch((err)=>{
            res.send({
                message:"Internal Server errror",
                status: 500,
                errmsg:err,
            })
        })
    })
    .catch((err)=>{
      console.log(err);  
    })
}

deleteOne = (req,res)=>{
    University.deleteOne({_id:req.body._id})
   .then((data)=>{
    console.log(data);
        res.send({
            message:"Data deleted successfully",
            status:200,
            data:data
        })
   })
   .catch((err)=>{
    // console.log(err);  
        res.send({
            message:"Internal Server Error",
            status: 500,
            errmsg:err,
        })
   })
}



module.exports = {
    add,
    getall,
    getsingle,
    updatedata,    
    deleteOne,
}
