const express = require("express");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

// Đăng ký routes
app.use("/api", userRoutes);

module.exports = app;
