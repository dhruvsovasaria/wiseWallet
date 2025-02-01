import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddExpense = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAddExpense = async (e) => {
    e.preventDefault();

    if (!amount || !category || !date) {
      setError("Please fill out all required fields.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:3000/api/expenses/add",
        { amount, category, date, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/");
    } catch (error) {
      setError("Failed to add expense. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 dark:bg-gray-800">
      <form onSubmit={handleAddExpense} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Add Expense</h2>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <input
          type="number"
          placeholder="Amount"
          className="w-full p-2 mb-3 border rounded dark:bg-gray-600 dark:text-white"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 mb-3 border rounded dark:bg-gray-600 dark:text-white"
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Shopping">Shopping</option>
          <option value="Others">Others</option>
        </select>

        <input
          type="date"
          className="w-full p-2 mb-3 border rounded dark:bg-gray-600 dark:text-white"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <textarea
          placeholder="Description (Optional)"
          className="w-full p-2 mb-3 border rounded dark:bg-gray-600 dark:text-white"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
