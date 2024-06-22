import mongoose from "mongoose";

// const coffeeMenuItem=new mongoose.Schema({
const coffeeMenuItemSchema=new mongoose.Schema({
    name:{type:String, required:true,},
    description:{type:String,required:true,},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
});

const coffeeShopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: String, required: true },
  // menu:{type:[coffeeMenuItem],required:true},
  menu: [{ type: mongoose.Schema.Types.ObjectId, ref: "coffeeMenuItemModel" ,default:[]}],
  owner: { type: String, required: true },
});

export const coffeeMenuItemModel =mongoose.models.coffeeMenuItemModel || mongoose.model("coffeeMenuItemModel",coffeeMenuItemSchema);
export const coffeeShopModel=mongoose.models.coffeeShopModel || mongoose.model('coffeeShopModel',coffeeShopSchema);