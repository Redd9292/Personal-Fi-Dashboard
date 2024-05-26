// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log(`Request path: ${req.path}`);
  if (req.path === "/api/data/dashboard") {
    console.log("Skipping auth for /dashboard");
    // Allow unauthenticated access to /dashboard for debugging
    return next();
  }

  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    console.log("No token found");
    return res.status(401).json({ message: "Authentication failed" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.log("Token verification failed");
    return res.status(401).json({ message: "Authentication failed" });
  }
};
