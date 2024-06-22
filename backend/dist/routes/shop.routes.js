"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shop_controller_1 = require("../controllers/shop.controller");
const router = express_1.default.Router();
router.get("/", shop_controller_1.getShop);
router.get("/all", shop_controller_1.getAllShops);
router.post("/new", shop_controller_1.createCoffeeShop);
exports.default = router;
