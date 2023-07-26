const express = require("express");
const bodyparser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/", (req, res) => {
  const task = req.body.task;
  res.status(200).send(task);
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port} `);
});
