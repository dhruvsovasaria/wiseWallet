const { Datatypes } = require("sequelize");
const sq = require("../config/db");

const Expense = sq.define("Expense", {
  amount: {
    type: Datatypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  date: {
    type: Datatypes.DATE,
    allowNull: false,
  },
  category: {
    type: Datatypes.STRING,
    allowNull: false,
  },
});

Expense.beforeCreate(async (expense) => {
  expense.date = new Date();
});
