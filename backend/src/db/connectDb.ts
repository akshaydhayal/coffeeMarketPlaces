import mongoose from "mongoose";

export function connectDb(){
    const mongo_url=process.env.MONGO_URI;
    if(mongo_url){
        mongoose.connect(mongo_url,{dbName:'coffeeApp'})
        .then(()=>{
            console.log("connected to coffeeApp db!!");
        })
    }else{
        console.log("mongo_url is not defined!!");
    }
}