const express = require("express");
const bodyparser = require("body-parser");
require("dotenv").config();

const app = express();

const routes = require("./view/routes.js")

const port = process.env.PORT || 8000;

app.use(bodyparser.json());
app.use("/hello", routes);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port} `);
});
