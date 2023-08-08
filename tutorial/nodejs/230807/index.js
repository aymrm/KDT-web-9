const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views","./views");

// const indexRouter = require("./routes/index.js");
// app.use("/",indexRouter);

const visitorRouter = require("./routes/visitor.js");

app.get("/",(req,res)=>{
    res.render("index");
})

app.use("/visitor",visitorRouter);

app.use("*",(req,res)=>{
    res.render("404");
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})