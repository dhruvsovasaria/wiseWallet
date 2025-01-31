const { Sequelize } = require("sequelize");
require("dotenv").config();

const sq = new Sequelize(process.env.DATABASE_URL);

const authDB = async () => {
  try {
    await sq.authenticate();
    console.log("Connection established");
  } catch (error) {
    console.error("Unable to connect :", error);
  }
};

authDB();

module.exports = sq;
