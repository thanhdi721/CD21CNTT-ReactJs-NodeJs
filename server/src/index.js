const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = 3001;
const mongoose = require("mongoose");
dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log("process.env.MONGO_DB", process.env.MONGO_DB);
mongoose
  .connect(
    `mongodb+srv://dkttravel:${process.env.MONGO_DB}@cluster0.nyoileh.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("COnnect DB success!");
  })
  .catch((err) => {
    console.log("connection errors");
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
