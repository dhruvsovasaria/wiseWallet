import { useState, useEffect } from "react";
import { fetchExpenses, addExpense, deleteExpense } from "../utils/api";

export const useExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchExpenses();
      setExpenses(res.data);
    } catch (err) {
      setError("Failed to load expenses");
    } finally {
      setLoading(false);
    }
  };

  const createExpense = async (expenseData) => {
    try {
      await addExpense(expenseData);
      loadExpenses();
    } catch (err) {
      setError("Failed to add expense");
    }
  };

  const removeExpense = async (id) => {
    try {
      await deleteExpense(id);
      loadExpenses();
    } catch (err) {
      setError("Failed to delete expense");
    }
  };

  return { expenses, loading, error, createExpense, removeExpense };
};
