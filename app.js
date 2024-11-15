// all the middleware added in app.js
import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

export const app = express();

config({
    path: './data/config.env'
})

// adding middleware to access the data from req.body (without this the req.body is undefined)
app.use(express.json());
app.use("/users", userRouter)

app.get("/",(req, res)=>{
    res.send("Well Done")
})