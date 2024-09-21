const Contact = require("./contactModel");
add = (req,res)=>{
    let contact = new Contact()
    contact.name = req.body.name
    contact.email = req.body.email
    contact.subject = req.body.subject
    contact.message = req.body.message
    contact.universityId = req.body.universityId
    conatct.programId = req.body.programId
    contact.save()
.then((data)=>{
    res.json({
        status:200,
        success:true,
        message:"Contact form submitted successfully",
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
    Contact.find()
   .then((contdata)=>{
    res.send({
        status:200,
        success:true,
        message:"All contact forms fetched successfully",
        data:contdata
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

module.exports = {
    add,
    getall,
    
}