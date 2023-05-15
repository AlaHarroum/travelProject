import User from "../models/User.js";
import bcrypt from "bcryptjs";

// create new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

//update User
export const updateUser = async (req, res) => {
  const id = req.params.id;
  // hashing password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          username:req.body.username,
          email:req.body.email,
          password:hash,
      }
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

//delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

//getSingle User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

//getAll User
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      message: "Successful",
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};
