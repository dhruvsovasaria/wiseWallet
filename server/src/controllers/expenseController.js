const Expense = require("../models/Expense");

exports.getExpenses = (res, req) => {
  try {
    const expenses = Expense.findAll({
      where: { userId: req.user.id },
    });
    res.json(expenses);
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.addExpense = async (res, req) => {
  try {
    const { amount, category, description, date } = req.body();
    const expense = await Expense.create({
      amount,
      category,
      description,
      date,
      userId: req.user.id,
    });
    req.status(201).json({ message: "expense added", expense });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error :", error });
  }
};
exports.deleteExpense = async (res, req) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findOne({
      where: {
        id: id,
        userId: req.user.id,
      },
    });
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    await expense.destroy();
    res.status(200).json({
      message: "expesnse deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
