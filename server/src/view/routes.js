const express = require("express");

const userController = require("../controller/userController")

const routes = express.Router();

routes.post("/register", userController.register);
  
// routes.post("/", controller.task);

module.exports = routes;