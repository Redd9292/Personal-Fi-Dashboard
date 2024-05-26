// routes/dataRoutes.js
const express = require("express");
const router = express.Router();
const DataController = require("../controllers/dataController");
const authMiddleware = require("../middleware/authMiddleware");

// Use authMiddleware for all routes except /dashboard
router.use((req, res, next) => {
  console.log(`Request received for path: ${req.path}`);
  if (req.path === "/dashboard") {
    console.log("Skipping auth for /dashboard");
    return next();
  }
  authMiddleware(req, res, next);
});

router.get("/incomes", DataController.getIncomes);
router.post("/incomes", DataController.createIncome);
router.get("/expenses", DataController.getExpenses);
router.post("/expenses", DataController.createExpense);
router.get("/budgets", DataController.getBudgets);
router.post("/budgets", DataController.createBudget);

// Add the /dashboard route
router.get("/dashboard", (req, res) => {
  res.json([
    { date: "2024-05-01", expenses: 200 },
    { date: "2024-05-02", expenses: 150 },
    // Add more sample data as needed
  ]);
});

module.exports = router;
