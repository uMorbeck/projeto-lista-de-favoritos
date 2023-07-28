const express = require("express");

const controller = require("../controller/controller")

const routes = express.Router();

routes.get("/hello", controller.hello);
  
routes.post("/", controller.task);

module.exports = routes;