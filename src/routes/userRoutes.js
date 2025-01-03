const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Định nghĩa các API
router.get("/users", userController.getUsers);
router.post("/users", userController.createUser);

module.exports = router;
