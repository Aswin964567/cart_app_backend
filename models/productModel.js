import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  price: String,
});

export default mongoose.model("Product", productSchema);
