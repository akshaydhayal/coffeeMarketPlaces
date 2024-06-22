"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = connectDb;
const mongoose_1 = __importDefault(require("mongoose"));
function connectDb() {
    const mongo_url = process.env.MONGO_URI;
    if (mongo_url) {
        mongoose_1.default.connect(mongo_url, { dbName: 'coffeeApp' })
            .then(() => {
            console.log("connected to coffeeApp db!!");
        });
    }
    else {
        console.log("mongo_url is not defined!!");
    }
}
