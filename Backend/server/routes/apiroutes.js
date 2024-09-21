
const routes = require ('express').Router();
const universityController = require("../api/university/universityController");
routes.post('/university/add', universityController.add)
routes.post('university/getall', universityController.getall)
routes.post('/university/getsingle', universityController.getsingle)

module.exports = routes;