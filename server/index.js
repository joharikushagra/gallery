const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/routes");
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://kushagra:kushagra12345678@cluster0.w2lg8.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected....");
  })
  .catch((err) => console.log(err.message));

app.use("/", routes);

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
