const routes = require('express').Router()
const universityController = require("../api/university/universityController")
const programController = require("../api/program/programController")

routes.post('/university/add',universityController.add)
routes.post('/university/all',universityController.all)


// Program route start

routes.post('/program/add',programController.add)
routes.post('/program/all',programController.all)


// Program route end
module.exports = routes