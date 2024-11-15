import mongoose from "mongoose";

export const connectDB = () => {
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName: "backendApi"
    })
    .then(()=>{
        console.log("database connected successfully")
    })
    .catch((err)=>{
        console.log(err);
    })
}