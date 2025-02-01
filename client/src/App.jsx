import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div
        className={`${darkMode ? "dark" : ""} min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 m-4 bg-gray-300 dark:bg-gray-700 rounded">
          Toggle Dark Mode
        </button>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-expense" element={<AddExpense />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
