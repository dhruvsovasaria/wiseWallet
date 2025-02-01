const { User } = require("../models/User");
const { generateToken } = require("../utils/token");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        // }
      });
      return res.status(201).json({
        token: generateToken(newUser.id),
        message: "User created successfully",
      });
    } else {
      res.status(400).json({ message: "User already exists" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    //right id  pass
    return res.status(200).json({ token: generateToken(user.id), message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error !" });
  }
};
