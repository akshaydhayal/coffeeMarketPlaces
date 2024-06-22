import jwt  from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { userModel } from '../models/user.model';

export const authCoffeeOwner=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const jwtToken=req.headers.jwt_token;
        console.log("jwtToken : ",jwtToken);
        const jwtSecret = process.env.JWT_SECRET_KEY;
        if(jwtSecret && jwtToken && typeof(jwtToken)==='string'){
            const decodedToken=jwt.verify(jwtToken, jwtSecret);
            console.log("decodedToken : ",decodedToken);
            if(!decodedToken){
                return res.status(401).json({message:"Invalid token"});
            }
            const userExist=await userModel.findOne({email:decodedToken});
            console.log("user : ",userExist);
            if(!userExist){
                return res.status(401).json({message:"User not found"});
            }
            if(userExist.role!='Owner'){
                return res.status(401).json({message:"You are not a Coffee shop owner"});
            }
            req.headers.owner=userExist.name;
            next();
        }  
    }catch(e){
        res.status(501).json({msg:"Error in auth Coffe owner middleware",error:e})
    }
}