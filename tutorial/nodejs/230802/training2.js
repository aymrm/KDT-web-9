const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views","./views");

app.get("/",(req,res)=>{
    res.render("training2");
})

const userId = "aymrm";
const userPw = "asdf";

app.post("/axios",(req,res)=>{
    let flag = false;
    if (req.body.userInputId===userId && req.body.userInputPw===userPw){
        flag=true;
    }
    console.log(req.body);
    res.send(flag);
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})