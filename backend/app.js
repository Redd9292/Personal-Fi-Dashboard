// app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

console.log("Connecting to MongoDB...");
connectDB();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Import and use routes
const authRoutes = require("./routes/authRoutes");
const dataRoutes = require("./routes/dataRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 5006; // Ensure the port is set to 5006
app.set("port", PORT);

module.exports = app;
