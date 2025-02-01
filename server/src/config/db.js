require("dotenv").config({ path: "../../../.env" });

const { Sequelize } = require("sequelize");

const databaseUrl = process.env.DATABASE_URL;

const sq = new Sequelize(databaseUrl, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const authDB = async () => {
  try {
    await sq.authenticate();
    console.log("Connection established");
  } catch (error) {
    console.error("Unable to connect:", error);
  }
};

authDB();

module.exports = sq;
