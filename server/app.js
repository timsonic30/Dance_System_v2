const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

require("dotenv").config();
const port = 3030;

app.use(bodyParser.json());
app.use(cors());

const indexRouter = require("./routes/index"); // The location of the file
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});
