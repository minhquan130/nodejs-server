const userModel = require("../models/userModel");

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách người dùng" });
  }
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await userModel.createUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi thêm người dùng mới" });
  }
};

module.exports = {
  getUsers,
  createUser,
};
