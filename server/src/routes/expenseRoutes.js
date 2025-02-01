const express = require("express");
const { addExpense, deleteExpense, getExpenses } = require("../controllers/expenseController");
const authmmiddleware = require("../middlewares/authmiddleware");
const router = express.Router();

router.post("/add", authmmiddleware, addExpense);
router.get("/", authmmiddleware, getExpenses);
router.delete("/:id", authmmiddleware, deleteExpense);

module.exports = router;
