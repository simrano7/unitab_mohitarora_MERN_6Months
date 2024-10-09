const University =  require("../university/universityModel")
const Student = require("../student/studentModel")

dashboard =async(req,res)=>{
    let totalUniversities =await University.countDocuments();
    let totalStudents = await Student.countDocuments();
    res.send({
        message:"dashboard loaded ",
        success:true,
        status:200,
        totalUniversities:totalUniversities,
        totalStudents:totalStudents
    })
}

module.exports = {dashboard}
