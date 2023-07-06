const express = require("express");
const serverConfig = require("./configs/server.config");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
const userModel = require("./models/user.model");

const app = express();

mongoose.connect(dbConfig.DB_URL);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error while conncting to database to DB");
});

db.once("open", () => {
  console.log(" Databse is  Connected");

  init();
});

async function init() {
  /*Initilze and create user
   */

  let admin = await userModel.findOne({
    userId: "admin",
  });

  if (admin) {
    console.log("Admin user already present");
    return;
  }

  admin = await userModel.create({
    name: "Laxman",
    userId: "admin",
    email: "laxmahenricks94@gmail.com",
    userType: "ADMIN",
    password: "laxman@781",
  });
  console.log(admin);
}

app.listen(serverConfig.PORT, () => {
  console.log(`server started on the port number ${serverConfig.PORT}`);
});
