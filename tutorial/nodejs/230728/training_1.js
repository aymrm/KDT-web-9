const express = require("express");
const app = express();
const PORT = 8001;

app.set("view engine","ejs");
app.set("views", "./views");

app.use("/abc",express.static("./public"))

app.get("/",(req,res)=>{
    res.render("training1");
})

app.listen(PORT,()=>{
    console.log("http://localhost:${PORT}");
})