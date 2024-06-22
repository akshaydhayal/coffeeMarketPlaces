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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCoffeeShop = exports.getAllShops = void 0;
exports.getShop = getShop;
const coffeeShop_model_1 = require("../models/coffeeShop.model");
const getAllShops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allShops = yield coffeeShop_model_1.coffeeShopModel.find();
        res.status(200).json({ allShops });
    }
    catch (e) {
        res.status(500).json({ msg: "Error getting in all shops controller", error: e });
    }
});
exports.getAllShops = getAllShops;
function getShop(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shopId = req.query.shopId;
            const shop = yield coffeeShop_model_1.coffeeShopModel.findById(shopId);
            res.status(200).json({ shop });
        }
        catch (e) {
            res.status(500).json({ msg: "Error in getShop Controller", error: e });
        }
    });
}
const createCoffeeShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, address, image, menu, owner } = req.body;
        console.log('name: ', name, " address: ", address);
        const newShop = new coffeeShop_model_1.coffeeShopModel({
            name, address, image, menu, owner
        });
        yield newShop.save();
        res.status(201).json({ msg: "Coffee shop created", newShop });
    }
    catch (e) {
        res.status(500).json({ msg: "Error creating shop", error: e });
    }
});
exports.createCoffeeShop = createCoffeeShop;
