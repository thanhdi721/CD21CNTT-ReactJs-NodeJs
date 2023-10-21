const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = 3001;
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
dotenv.config();
app.use(bodyParser.json);
routes(app);

mongoose
  .connect(`${process.env.MONGO_DB}`)
  .then(() => {
    console.log("Connect DB success!");
  })
  .catch((err) => {
    console.log("connection errors");
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
