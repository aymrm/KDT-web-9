const express = require("express");
const app = express();
const PORT = 8002;

app.set("view engine","ejs");
app.set("views","./views");

app.use("/training2",express.static("./public"))

app.get("/",(req,res)=>{
    res.render("training2");
})

app.listen(PORT,()=>{
    console.log("https://localhost:${PORT}");
})