import express, { Request, Response } from "express";
import { userModel } from "../models/user.model";
import bcrypt from "bcrypt";
import { generateJwtToken } from "../utils/generateJwtToken";

export const getUser=async(req:Request,res:Response)=>{
    try{
        const userId=req.params.userId;
        const user=await userModel.findById(userId);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json({user});
    }catch(e){
        res.status(500).json({message:"error in getUser controller",error:e});
    }   
}

export const signUpUser=async(req:Request,res:Response)=>{
    try{
        const {name,email,password,role}=req.body;
        const hashedPassword=await bcrypt.hash(password,10);
        const user=await userModel.create({name,email,password:hashedPassword,role});
        const jwtToken=generateJwtToken(email);
        res.status(201).json({msg:"User signed up!!",user,jwtToken});
    }catch(e){
        res.status(500).json({message:"error in signUpUser controller",error:e});
    }
}

export const loginUser=async(req:Request,res:Response)=>{
    try{
        const {email,password}=req.body;
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not found"});   
        }
        const userIsMatched=bcrypt.compare(password,user.password);
        if(!userIsMatched){
            return res.status(401).json({message:"Invalid password"});
        }
        const jwtToken=generateJwtToken(email);
        res.status(200).json({msg:"User logged in!!",user,jwtToken});

    }catch(e){
        res.status(500).json({msg:"Error in loginUser Controller", error:e});
    }
}