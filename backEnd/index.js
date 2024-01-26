const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/clothShop", {});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
app.get("/signup", (req, res) => {
  res.send("hi");
  console.log("Connected to MongoDB");
});
const PORT = 3500;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
