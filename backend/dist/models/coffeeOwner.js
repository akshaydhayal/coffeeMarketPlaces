"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coffeeOwnerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const coffeeOwnerSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
exports.coffeeOwnerModel = mongoose_1.default.models.coffeeOwnerModel ||
    mongoose_1.default.model("coffeeOwnerModel", coffeeOwnerSchema);