import express from "express";
import { createCoffeeShop, getAllShops, getShop } from "../controllers/shop.controller";

const router=express.Router();

router.get("/",getShop);
router.get("/all",getAllShops);
router.post("/new",createCoffeeShop)

export default router;