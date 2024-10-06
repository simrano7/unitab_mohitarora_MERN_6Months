const routes = require('express').Router()
const universityController = require("../api/university/universityController")
const programController = require("../api/program/programController")
const UserController = require("../api/user/userController")

routes.post('/user/login',UserController.login)
routes.use(require("../config/middleware"))
routes.post('/user/changepassword',UserController.changePassword)

//university route start

routes.post('/university/add',universityController.add)
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
module.exports = routes