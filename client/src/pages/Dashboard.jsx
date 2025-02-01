import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ExpenseList from "../components/ExpenseList";
import InsightsChart from "../components/InsightsChart";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/api/expenses", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setExpenses(res.data);
      } catch (error) {
        navigate("/login");
      }
    };
    fetchExpenses();
  }, [navigate]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Expenses</h1>
      <ExpenseList expenses={expenses} />
      <InsightsChart expenses={expenses} />
    </div>
  );
};

export default Dashboard;
