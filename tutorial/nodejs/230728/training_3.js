const express = require("express");
const app = express();
const PORT = 8001;

app.set("view engine","ejs");
app.set("views","./views");

app.use("/training3",express.static("./public"));

app.get("/",(req,res)=>{
    res.render("training3" , {number:[2,3,5,7,8]})
})

app.listen(PORT,()=>{
    console.log("http://localhost:${PORT}");
})