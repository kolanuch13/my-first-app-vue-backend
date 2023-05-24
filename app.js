const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();

const apartmentsRouter = require("./api/apartments");
const usersRouter = require("./api/users");
const ordersRouter = require("./api/orders");
const citiesRouter = require("./api/cities");

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_HOST)
  .then(() => console.log("DB CONNECTED"))
  .catch((err)=>console.log(err))

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());


app.use("/api/apartments", apartmentsRouter);
app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/cities", citiesRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
