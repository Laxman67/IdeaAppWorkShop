const express = require("express");
const serverconfig = require("./config/server-config");

const app = express();

app.listen(serverconfig.PORT, () => {
  console.log(`Server Started on the port number  ${serverconfig.PORT}`);
});
