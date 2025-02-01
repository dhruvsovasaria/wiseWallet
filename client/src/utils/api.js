import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api"; // Update for production

// ✅ Helper function to get auth token
const getAuthToken = () => localStorage.getItem("token");

// ✅ Wrapper for Axios requests
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// ✅ Attach token to every request
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Auth API Calls
export const registerUser = (userData) => api.post("/auth/register", userData);
export const loginUser = (credentials) => api.post("/auth/login", credentials);

// ✅ Expense API Calls
export const fetchExpenses = () => api.get("/expenses");
export const addExpense = (expenseData) => api.post("/expenses/add", expenseData);
export const deleteExpense = (expenseId) => api.delete(`/expenses/${expenseId}`);

export default api;
