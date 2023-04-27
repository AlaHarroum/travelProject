import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();


// update user
router.put("/:id", verifyUser, updateUser);

// delete user
router.delete("/:id",verifyUser, deleteUser);

// Get Single user
router.get("/:id", verifyUser, getSingleUser);

// Get all users
router.get("/",verifyAdmin, getAllUser);

export default router;
