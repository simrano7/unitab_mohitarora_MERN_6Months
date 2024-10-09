const Channelpartner =  require("./cpModel")
const User =require('../user/userModel')
const bcrypt = require("bcrypt")
const saltround = 10

add = (req,res) =>{
    var errMsg = [];
    if (!req.body.name){
        errMsg.push("name is required")
    }
    if(!req.body.email){
        errMsg.push("email is required")
    }
    if(!req.body.password){
        errMsg.push("password is required")
    }
    if(!req.body.contact){
        errMsg.push("contact is required")
    }
    if(!req.body.firmName){
        errMsg.push("firmName is required")
    }
    if(!req.body.state){
        errMsg.push("state is required")
    }
    if(!req.body.cpCode){
        errMsg.push("cpCode is required")
    }
    if(!req.body.userType){
        errMsg.push("userType is required")
    }
    
    if(errMsg.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsg
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
                        let cpObj = new Channelpartner()
                        cpObj.userId = userd._id
                        cpObj.name = req.body.name
                        cpObj.email = req.body.email
                        cpObj.contact = req.body.contact
                        cpObj.firmName = req.body.firmName
                        cpObj.state = req.body.state
                        cpObj.cpCode = req.body.cpCode
                        cpObj.cpType = req.body.cpType
                        cpObj.save()
                        .then((userregistereddata)=>{
                                res.send({
                                    message:"channel partner Registered Successfully",
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

module.exports = {add}
