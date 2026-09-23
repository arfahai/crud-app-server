const express = require("express");
const router = express.Router();

const {handlePostAllUser,handleGetAllUsers,handleGetUserById,handleUpdateIdByUser,handleDeleteById,} = require("../controller/userControllers");

router.post("/create", handlePostAllUser);
router.get("/", handleGetAllUsers);
router.get("/:id", handleGetUserById);
router.put("/edit/:id", handleUpdateIdByUser);
router.delete("/delete/:id", handleDeleteById);

module.exports = router;