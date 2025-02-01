const jwt = require("jsonwebtoken");

const generateToken = (userid) => {
  return jwt.sign({ userid }, process.env.JWT_SECRET);
};

module.exports = { generateToken };
