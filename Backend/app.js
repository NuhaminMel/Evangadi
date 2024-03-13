require("dotenv").config();
const pool = require("./config/db.config");
const express = require("express");

const app = express();
const port = process.env.PORT;

// import router 
const router = require("./routes/index"); 

//middleware
app.use(express.json());
app.use(router);

app.listen(port, (res, req) =>
  console.log(`Listening at http://localhost:${port}`)
);

module.exports = app
