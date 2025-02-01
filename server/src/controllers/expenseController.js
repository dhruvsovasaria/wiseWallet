const Expense = require("../models/Expense");

exports.addExpense = (res, req) => {};
exports.getExpenses = (res, req) => {
  try {
    const expenses = Expense.findAll({
      where: {},
    });
  } catch (error) {}
};
exports.deleteExpense = (res, req) => {};
