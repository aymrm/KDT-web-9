const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views","./views");

const router = require("./routes/training1.js");
app.use("/",router);

app.get("*",(req,res)=>{
    res.render("404");
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})