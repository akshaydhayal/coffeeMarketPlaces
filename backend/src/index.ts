import express from "express";
import mongoose from "mongoose";
import { connectDb } from "./db/connectDb";
import dotenv from "dotenv";
import shopRouter from "./routes/shop.routes";
import userRouter from "./routes/user.routes";

dotenv.config();
const app=express();

connectDb();
app.use(express.json());

app.use("/api/shop",shopRouter);
app.use("/api/user",userRouter);

app.listen(3001,()=>{
    console.log("server is running at port 3001");
})

// api endpoints
// 1. create coffe shop                                done
// 2. customer sign up/login                           done
// 3. owner sign up/login                              done
// 4. add menu item in a shop                          done
// 5. get all coffee shops                             done
// 6. get a particular coffee shop                     done

//end
// 7. buy a shop item