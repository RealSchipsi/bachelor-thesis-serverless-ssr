import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  email: String,
  password: String,
});

module.exports =
  mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);
