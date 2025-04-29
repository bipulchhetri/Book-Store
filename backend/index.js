const express=require("express")
const app=express();
require("dotenv").config();
require('./connection/cont')

app.get('/',(req,res)=>{
    res.send("hello server")
});
// creating PORT
app.listen(process.env.PORT,()=>{
    console.log(`SERVER IS RUNNING ${process.env.PORT}`);
})