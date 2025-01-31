const { Datatypes } = require("sequelize");
const sq = require("../config/db");
const becrypt = require("bcryptjs");

const User = sq.define("User", {
  firstName: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  email: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  password: {
    type: Datatypes.STRING,
    allowNull: false,
  },
});

User.beforeCreate(async (user) => {
  user.password = await becrypt.hash(user.password, 10);
});

module.exports = User;
