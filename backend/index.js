// const express=require("express")
// const app=express();
// require("dotenv").config();
// require('./connection/cont')
// const User=require("./routes/user")
// // routes
// app.use("/api/",User)


// // json data
// app.use(express.json)

// app.get('/',(req,res)=>{
//     res.send("hello server")
// });
// // creating PORT
// app.listen(process.env.PORT,()=>{
//     console.log(`SERVER IS RUNNING ${process.env.PORT}`);
// })

const express = require("express");
const app = express();
require("dotenv").config();
require('./connection/cont');

// Middleware for JSON parsing
app.use(express.json());

// Import routes
const userRoutes = require("./routes/user");

// Use routes
app.use("/api", userRoutes);

// Root route
app.get('/', (req, res) => {
    res.send("Hello Server");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
