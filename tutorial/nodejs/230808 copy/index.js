import express from "express";
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine","ejs");
app.set("views","./views");

import router from "./routes/index.js"

app.use("/",router);

app.use("*",(req,res)=>{
    res.render("404");
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})