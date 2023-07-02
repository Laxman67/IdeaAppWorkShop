
const express = require('express');
const app = express();

const serverconfig = require('./config/server-config')

app.listen(serverconfig.PORT,()=>{
    console.log("Server Started");
})