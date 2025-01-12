const routes = require("express").Router()
const TaskController = require("../controller/TaskController")

routes.get("/", TaskController.getAll)
routes.post("/create", TaskController.createTask)
routes.get("/getById/:id", TaskController.getById)
routes.post("/updateOne/:id", TaskController.update)

module.exports = routes