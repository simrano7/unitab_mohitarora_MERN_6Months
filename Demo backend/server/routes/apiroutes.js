const routes = require('express').Router()
const universityController = require("../api/university/universityController")
const programController = require("../api/program/programController")
const studentController = require("../api/student/studentcontroller")
const userController = require("../api/user/userController")
const dashboardController = require("../api/dashboard/dashboardController")
const cpController = require("../api/cp/cpController")
const multer = require('multer')

routes.post('/student/register',studentController.register)

routes.post('/channelpartner/add',cpController.add)

routes.post('/user/login',userController.login)
// routes.use(require("../config/middleware"))
routes.post('/user/changepassword',userController.changePassword)




//university route start

const universitystorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './server/public/universities')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
    }
  })
  
  const universityupload = multer({ storage: universitystorage })


routes.post('/university/add',universityupload.single('universityImage'),universityController.add)
routes.post('/university/all',universityController.all)
routes.post('/university/getsingle',universityController.getsingle)
routes.post('/university/updatedata',universityController.updatedata)
routes.post('/university/delete',universityController.deleteOne)
routes.post('/university/changeStatus',universityController.changeStatus)

// university route end

// Program route start

routes.post('/program/add',programController.add)
routes.post('/program/all',programController.all)
routes.post('/program/getsingle',programController.getsingle)
routes.post('/program/updatedata',programController.updatedata)
routes.post('/program/delete',programController.deleteOne)
routes.post('/program/changeStatus',programController.changeStatus)
// Program route end


// Channel Partner route start

// Channel Partner route end

routes.post('/dashboard',dashboardController.dashboard)



module.exports = routes