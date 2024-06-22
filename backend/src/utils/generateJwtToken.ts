import jwt from "jsonwebtoken";

export function generateJwtToken(payload:string){
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    let token;
    if(jwtSecretKey){
        token = jwt.sign(payload, jwtSecretKey);
    }
    return token;
}