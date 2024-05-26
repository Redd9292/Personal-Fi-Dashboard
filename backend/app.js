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

const PORT = process.env.PORT || 5003; // Ensure the port is set to 5003
app.set("port", PORT);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
    process.exit(0);
  });
});

module.exports = app;
