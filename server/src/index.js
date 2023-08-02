const express = require("express");
const bodyparser = require("body-parser");
require("dotenv").config();

const app = express();

const routes = require("./view/routes");
const connectDB = require("./model/db/database");

const port = process.env.PORT || 8000;

app.use(bodyparser.json());
app.use("/", routes);

// app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

connectDB();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port} `);
});
