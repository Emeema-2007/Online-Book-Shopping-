const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  bookTitle: String,
  status: {
    type: String,
    default: "Order Placed"
  }
});

module.exports = mongoose.model("Order", orderSchema);
