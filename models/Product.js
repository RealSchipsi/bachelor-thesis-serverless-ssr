import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: String,
  articlenumber: String,
  price: String,
  category: String,
  categorynumber: String,
  description: String,
  image: String,
  quantity: String,
});

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
