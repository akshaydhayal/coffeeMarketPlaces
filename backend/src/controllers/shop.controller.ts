import express, { Request, Response } from "express";
import { coffeeMenuItemModel, coffeeShopModel } from "../models/coffeeShop.model";

export const getAllShops=async(req:Request,res:Response)=>{
    try{
        const allShops=await coffeeShopModel.find().populate("menu");
        res.status(200).json({allShops});
    }catch(e){
        res.status(500).json({msg:"Error getting in all shops controller",error:e});
    }
}
export async function getShop(req:Request,res:Response){
    try{
        const shopId=req.query.shopId;
        const shop=await coffeeShopModel.findById(shopId).populate("menu");
        res.status(200).json({shop});
    }catch(e){
        res.status(500).json({msg:"Error in getShop Controller",error:e});
    }
}

export const createCoffeeShop=async(req:Request,res:Response)=>{
    try{
        // const {name,address,image,menu,owner}=req.body;
        const {name,address,image}=req.body;
        console.log('name: ',name," address: ",address);
        console.log("shop owner : ",req.headers.owner);
        const newShop=new coffeeShopModel({
            name,address,image,owner:req.headers.owner
        });
        await newShop.save();
        res.status(201).json({msg:"Coffee shop created",newShop});

    }catch(e){
        res.status(500).json({msg:"Error creating shop",error:e});
    }
}

export const addMenuItem=async(req:Request,res:Response)=>{
    try{
        const shopOwner=req.headers.owner;
        const shopId=req.params.shopId;
        const shopExist=await coffeeShopModel.findById(shopId);
        if(!shopExist){
            res.status(404).json({msg:"Shop not found"});
        }
        if(shopOwner!=shopExist.owner){
            res.status(401).json({msg:"Wrong owner of the shop"});
        }
        const {name,description,price,image,category}=req.body;
        const menuItem=await coffeeMenuItemModel.create({name,description,price,image,category});
        shopExist.menu.push(menuItem);
        await shopExist.save();
        res.status(201).json({msg:"Menu item added",menuItem});
    }catch(e){
        res.status(500).json({msg:"Error adding new menu item",error:e});
    }
}