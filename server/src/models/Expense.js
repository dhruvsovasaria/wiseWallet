const { DataTypes } = require("sequelize");
const sq = require("../config/db");
const User = require("./User");

const Expense = sq.define("Expense", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Expense, { foreignKey: "userId", onDelete: "CASCADE" });
Expense.belongsTo(User, { foreignKey: "userId" });

Expense.beforeCreate(async (expense) => {
  if (!expense.date) {
    expense.date = new Date();
  }
});

module.exports = Expense;
