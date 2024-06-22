"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectDb_1 = require("./db/connectDb");
const dotenv_1 = __importDefault(require("dotenv"));
const shop_routes_1 = __importDefault(require("./routes/shop.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, connectDb_1.connectDb)();
app.use(express_1.default.json());
app.use("/api/shop", shop_routes_1.default);
app.use("/api/user", user_routes_1.default);
app.listen(3001, () => {
    console.log("server is running at port 3001");
});
// api endpoints
// 1. create coffe shop
// 2. customer sign up/login
// 3. owner sign up/login
// 4. add menu item in a shop
// 5. get all coffee shops
// 6. get a particular coffee shop
//end
// 7. buy a shop item
