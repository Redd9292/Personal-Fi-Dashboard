require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

console.log("Connecting to MongoDB...");
connectDB();

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/data", require("./routes/dataRoutes"));

module.exports = app; // Export the app
