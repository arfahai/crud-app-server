const User = require("../models/userModels");
const handlePostAllUser = async (req, res) => {
  try {
    const body = req.body;
    if (
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.password
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const user = await User.create(body);
    return res.status(201).json({
      message: "User Created Successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });

  }
};
const handleGetAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

};

const handleGetUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {

      return res.status(404).json({
        message: "User not found",
      });

    }

    res.status(200).json(user);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

};

const handleUpdateIdByUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,req.body,
      {
        new: true,
      }

    );

    if (!updatedUser) {

      return res.status(404).json({
        message: "User not found",
      });

    }

    res.status(200).json({
      message: "User Updated Successfully",
      updatedUser,
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

};

const handleDeleteById = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "User Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

};


module.exports = {

  handlePostAllUser,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateIdByUser,
  handleDeleteById,

};