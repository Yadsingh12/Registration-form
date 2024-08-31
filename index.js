const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
