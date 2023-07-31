const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = process.env.DB_URI;

const connectDB = () => {
  mongoose
    .set("strictQuery", false)
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
