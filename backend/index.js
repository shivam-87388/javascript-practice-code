
const express = require("express");
const connect_db = require("./config/connection");
require('dotenv').config();




const app = express();
const port = process.env.PORT || 5000;

app.use('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`server started on  ${port}`)
})