const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");

const db = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(cookieParser());

routes(app);

db.connect();
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
