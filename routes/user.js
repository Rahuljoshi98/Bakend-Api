import express from "express";
import { createUser, deleteUserDetails, getAllUsers, getUserDetails, special, updateUserDetails } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers)

router.get("/usersbyid/special", special)

router.post("/new", createUser)

// dynamic route (make sure create them at the bottom of every routes)

// router.get("/userbyid/:userId", getUserDetails)
// router.put("/userbyid/:userId", updateUserDetails)
// router.delete("/userbyid/:userId", deleteUserDetails)

// if the end points are same then we can use this
router.
    route("/userbyid/:userId")
    .get(getUserDetails)
    .put(updateUserDetails)
    .delete(deleteUserDetails)



export default router;