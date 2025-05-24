const express = require("express");
const cors=require("cors");
const app = express();
require("dotenv").config();
require("./connection/cont"); // MongoDB connection

// Middleware
app.use(express.json());
app.use(cors());
// Routes
const userRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");
const favourite=require("./routes/favourite")
const cart=require("./routes/cart")

// all API
app.use("/api/users", userRoutes);  // All user routes under /api/users
app.use("/api/books", bookRoutes);  // All book routes under /api/books
app.use("/api/favourite",favourite);
app.use("/api/cart",cart);
// Root route
app.get("/", (req, res) => {
    res.send("Hello Server");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
