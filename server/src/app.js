const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
// const authRoutes = require("./routes/authroutes");
const authRoutes = require("./routes/authrouter");
const expenseRoutes = require("./routes/expenseRoutes");
const sq = require("./config/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

sq.sync().then(() => console.log("DB synced"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on prt ${PORT}`);
});
