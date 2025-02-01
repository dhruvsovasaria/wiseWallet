const { jwt } = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status.json({
        message: "authentication token missing",
      });
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;

    console.log(verified);
    next();
  } catch (error) {
    res.status(401).json({
      message: "unauthorized",
    });
  }
};
module.exports = authMiddleware;
