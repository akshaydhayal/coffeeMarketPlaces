"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coffeeShopModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const coffeeMenuItem = new mongoose_1.default.Schema({
    name: { type: String, required: true, },
    description: { type: String, required: true, },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
});
const coffeeShopSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, },
    address: { type: String, required: true, },
    image: { type: String, required: true },
    menu: { type: [coffeeMenuItem], required: true },
    owner: { type: String, required: true }
});
exports.coffeeShopModel = mongoose_1.default.models.coffeeShopModel || mongoose_1.default.model('coffeeShopModel', coffeeShopSchema);
