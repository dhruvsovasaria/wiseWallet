const express = require("express");
const { login, register } = require("../controllers/auth");

const router = express.Router();

route.post("/register", register);
route.post("/login", login);

module.exports = route;
