import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: String,
    userEmail: String,
    password: String,
})

export const userData = mongoose.model("userData",userSchema);