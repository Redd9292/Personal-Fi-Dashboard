const Income = require("../models/Income");
const Expense = require("../models/Expense");
const Budget = require("../models/Budget");

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find({ user: req.user._id });
    res.json(incomes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createIncome = async (req, res) => {
  const { amount, date, description } = req.body;
  try {
    const income = new Income({
      amount,
      date,
      description,
      user: req.user._id,
    });
    await income.save();
    res.status(201).json(income);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user._id });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createExpense = async (req, res) => {
  const { amount, date, description, category } = req.body;
  try {
    const expense = new Expense({
      amount,
      date,
      description,
      category,
      user: req.user._id,
    });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({ user: req.user._id });
    res.json(budgets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBudget = async (req, res) => {
  const { total } = req.body;
  try {
    const budget = new Budget({ total, user: req.user._id });
    await budget.save();
    res.status(201).json(budget);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
