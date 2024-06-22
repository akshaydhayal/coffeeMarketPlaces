import express from "express";
import { getUser, loginUser, signUpUser } from "../controllers/user.controller";

const router=express.Router();

router.get("/:userId",getUser);
router.post("/signup",signUpUser);
router.post("/login",loginUser);

export default router;