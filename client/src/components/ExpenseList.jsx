import { formatCurrency, formatDate } from "../utils/format";
import { useExpenses } from "../hooks/useExpenses";

const ExpenseList = () => {
  const { expenses, removeExpense } = useExpenses();

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-3">Your Expenses</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-left text-sm dark:text-gray-300">
            <th className="p-2">Amount</th>
            <th className="p-2">Category</th>
            <th className="p-2">Date</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <tr key={expense.id} className="border-b text-sm dark:text-gray-400">
                <td className="p-2">{formatCurrency(expense.amount)}</td>
                <td className="p-2">{expense.category}</td>
                <td className="p-2">{formatDate(expense.date)}</td>
                <td className="p-2">
                  <button
                    onClick={() => removeExpense(expense.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-3 text-center text-gray-500 dark:text-gray-300">
                No expenses found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
