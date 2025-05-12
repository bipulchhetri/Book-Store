const express = require("express");
const app = express();
require("dotenv").config();
require("./connection/cont"); // MongoDB connection

// Middleware
app.use(express.json());

// Routes
const userRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");

app.use("/api/users", userRoutes);  // All user routes under /api/users
app.use("/api/books", bookRoutes);  // All book routes under /api/books

// Root route
app.get("/", (req, res) => {
    res.send("Hello Server");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
