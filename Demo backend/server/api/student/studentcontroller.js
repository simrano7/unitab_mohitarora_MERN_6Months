const Student = require('./studentModel')
const User =require('../user/userModel')
const bcrypt = require("bcrypt")
const saltround = 1

register =(req,res)=>{
    var errMsg = []
    if(!req.body.email)
        errMsg.push("email is required")
    if(!req.body.name)
        errMsg.push("name is required")
    if(!req.body.password)
        errMsg.push("password is required")
    if(!req.body.contact)
        errMsg.push("contact is required")
    if(!req.body.program)
        errMsg.push("program is required")
    if(!req.body.state)
        errMsg.push("contact is state")
    if(errMsg.length>0){
        res.json({
            message:errMsg,
            status:422,
            success:false
        })
    }
    else{
        // insert
        User.findOne({email:req.body.email})
        .then((userdata)=>{
            if(!userdata){
                    let userObj = new User()
                    userObj.email = req.body.email
                    userObj.name = req.body.name
                    userObj.password = bcrypt.hashSync(req.body.password,saltround)
                    userObj.save()
                    .then((userd)=>{
                        let studObj = new Student()
                        studObj.userId = userd._id
                        studObj.name = req.body.name
                        studObj.email = req.body.email
                        studObj.contact = req.body.contact
                        studObj.program = req.body.program
                        studObj.state = req.body.state
                        studObj.save()
                        .then((userregistereddata)=>{
                                res.send({
                                    message:"Student Registered Successfully",
                                    status:200,
                                    success:true,
                                    data:userregistereddata
                                })
                        })
                        .catch((err)=>{
                            res.json({
                                message:"Something went wrong",
                                status:500,
                                success:false
                            })
                        })

                    })
                    .catch((err)=>{
                        res.json({
                            message:"Something went wrong",
                            status:500,
                            success:false
                        })
                    })
             }
             else{
                res.json({
                    message:"User Already exists with same email",
                status:422,
                success:false
                })  
            }
        })
        .catch(err=>{
            res.json({
                message:"Something went wrong",
            status:500,
            success:false
            })
        })
    }

}

module.exports= {register}