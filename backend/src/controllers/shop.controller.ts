import express, { Request, Response } from "express";
import { coffeeShopModel } from "../models/coffeeShop.model";

export const getAllShops=async(req:Request,res:Response)=>{
    try{
        const allShops=await coffeeShopModel.find();
        res.status(200).json({allShops});
    }catch(e){
        res.status(500).json({msg:"Error getting in all shops controller",error:e});
    }
}
export async function getShop(req:Request,res:Response){
    try{
        const shopId=req.query.shopId;
        const shop=await coffeeShopModel.findById(shopId);
        res.status(200).json({shop});
    }catch(e){
        res.status(500).json({msg:"Error in getShop Controller",error:e});
    }
}

export const createCoffeeShop=async(req:Request,res:Response)=>{
    try{
        const {name,address,image,menu,owner}=req.body;
        console.log('name: ',name," address: ",address);
        const newShop=new coffeeShopModel({
            name,address,image,menu,owner
        });
        await newShop.save();
        res.status(201).json({msg:"Coffee shop created",newShop});

    }catch(e){
        res.status(500).json({msg:"Error creating shop",error:e});
    }
}