"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.signUpUser = exports.getUser = void 0;
const user_model_1 = require("../models/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateJwtToken_1 = require("../utils/generateJwtToken");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const user = yield user_model_1.userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user });
    }
    catch (e) {
        res.status(500).json({ message: "error in getUser controller", error: e });
    }
});
exports.getUser = getUser;
const signUpUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, role } = req.body;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield user_model_1.userModel.create({ name, email, password: hashedPassword, role });
        const jwtToken = (0, generateJwtToken_1.generateJwtToken)(email);
        res.status(201).json({ msg: "User signed up!!", user, jwtToken });
    }
    catch (e) {
        res.status(500).json({ message: "error in signUpUser controller", error: e });
    }
});
exports.signUpUser = signUpUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield user_model_1.userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const userIsMatched = bcrypt_1.default.compare(password, user.password);
        if (!userIsMatched) {
            return res.status(401).json({ message: "Invalid password" });
        }
        const jwtToken = (0, generateJwtToken_1.generateJwtToken)(email);
        res.status(200).json({ msg: "User logged in!!", user, jwtToken });
    }
    catch (e) {
        res.status(500).json({ msg: "Error in loginUser Controller", error: e });
    }
});
exports.loginUser = loginUser;
