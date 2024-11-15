import { userData } from "../models/user.js";

export const getAllUsers = async (req, res)=>{
    const users = await userData.find({});
    res.json({
        success: true,
        users,
    })
}

export const special = async (req, res)=>{
    res.json({
        success: true,
        message: "Nice job",
    });
}

export const createUser = async (req, res)=>{
    const { userName, userEmail, password } = req.body;
    const user = await userData.create({
        userName, 
        userEmail, 
        password
    })

    res.status(201).cookie("token","value").json({
        success: true,
        message: "User Created Successfully"
    })
}

export const getUserDetails = async (req, res)=>{
    const { userId } = req.params;
    const user = await userData.findById(userId);
    res.json({
        success: true,
        user,
    })
}

export const updateUserDetails = async (req, res)=>{
    const { userId } = req.params;
    res.json({
        success: true,
        message: "updated",
    })
}

export const deleteUserDetails = async (req, res)=>{
    const { userId } = req.params;
    res.json({
        success: true,
        message: "deleted",
    })
}