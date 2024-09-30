
const routes = require ('express').Router();
const universityController = require("../api/university/universityController")
const programController = require("../api/program/programController")
routes.post('/university/add', universityController.add)
routes.post('university/getall', universityController.getall)
routes.post('/university/getsingle', universityController.getsingle)
routes.post('/university/getsingle', universityController.updatedata)
routes.post('/university/getsingle', universityController.deleteOne)


// program routes start

routes.post('/program/add', programController.add)
routes.post('/program/add', programController.getall)
routes.post('/program/add', programController.getsingle)
routes.post('/program/add', programController.updatedata)
routes.post('/program/add', programController.deleteOne)

// program routes end


module.exports = routes;