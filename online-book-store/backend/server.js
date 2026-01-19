const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Book = require("./models/Book");
const Order = require("./models/Order");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/onlineBookStore")
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log(err));

app.get("/api/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.get("/api/order/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
