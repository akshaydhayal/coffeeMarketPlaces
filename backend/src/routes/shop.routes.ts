import { authCoffeeOwner } from './../middleware/authCoffeeOwner';
import express from "express";
import { addMenuItem, createCoffeeShop, getAllShops, getShop } from "../controllers/shop.controller";

const router=express.Router();

router.get("/",getShop);
router.get("/all",getAllShops);
router.post("/new",authCoffeeOwner,createCoffeeShop)
router.post("/addItem/:shopId",authCoffeeOwner,addMenuItem);

export default router;