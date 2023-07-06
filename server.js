const express = require("express");
const serverConfig = require("./configs/server.config");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");

const app = express();

mongoose.connect(dbConfig.DB_URL);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error while conncting to database to DB");
});

db.once("open", () => {
  console.log(" Databse is  Connected");
});

app.listen(serverConfig.PORT, () => {
  console.log(`server started on the port number ${serverConfig.PORT}`);
});
