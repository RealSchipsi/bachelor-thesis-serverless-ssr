import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  title: String,
  categorynumber: String,
  image: String,
});

module.exports =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);
