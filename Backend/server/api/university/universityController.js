const University = require("./universityModel")
add = (req,res)=>{
    let university =new university()
    university.universityName = req.body.universityName
    university.universityImage = req.body.universityImage
    university.description = req.body.description
    university.save()
    .then((data)=>{
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
            message:err,
        })
    })

}

getall=(req,res)=>{
    University.find()
    .then((unidata)=>{
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

module.exports = {
    add,
    getall,
    getsingle
}