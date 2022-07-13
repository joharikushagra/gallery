const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/routes");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.w2lg8.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database connected....");
  })
  .catch((err) => console.log(err.message));

app.get("/", (req, res) => res.send("Hello"));
// app.use("/", routes);

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
