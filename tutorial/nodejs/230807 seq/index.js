const express = require("express");
const app = express();
const PORT = 8000;
const db=require("./models/index");

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

db.sequelize.sync({force:false}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`);
    })
});

// force:false 를 쓰면 table이 없을 경우 생성해서 진행함 (default)
// force:true 를 쓰면 table이 있으면 삭제하고 만듬