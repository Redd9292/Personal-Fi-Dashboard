const express = require("express");
const router = express.Router();
const DataController = require("../controllers/dataController");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware);

router.get("/incomes", DataController.getIncomes);
router.post("/incomes", DataController.createIncome);
router.get("/expenses", DataController.getExpenses);
router.post("/expenses", DataController.createExpense);
router.get("/budgets", DataController.getBudgets);
router.post("/budgets", DataController.createBudget);

module.exports = router;
