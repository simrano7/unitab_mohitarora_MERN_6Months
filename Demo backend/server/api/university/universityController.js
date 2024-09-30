const University = require("./universityModel")
add = (req,res)=>{
    var errMsg =[];
    if(!req.body.universityName){
        errMsg.push("university name is required");
    }
    if(!req.body.universityImage){
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
    universityObj.universityImage = req.body.universityImage
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

module.exports = {add, all}