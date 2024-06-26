import mongoose from "mongoose";

const coffeeOwnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const coffeeOwnerModel =
  mongoose.models.coffeeOwnerModel ||
  mongoose.model("coffeeOwnerModel", coffeeOwnerSchema);
