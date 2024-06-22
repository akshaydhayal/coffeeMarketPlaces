"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJwtToken = generateJwtToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateJwtToken(payload) {
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    let token;
    if (jwtSecretKey) {
        token = jsonwebtoken_1.default.sign(payload, jwtSecretKey);
    }
    return token;
}
