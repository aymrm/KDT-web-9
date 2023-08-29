const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const secret = "kor"

const userInfo = { id : "kdt9" , pw : "1234" };

app.get("/",(req,res)=>{
    res.render("training");
})

app.get("/login",(req,res)=>{
    res.render("trainingLogin");
})

app.post("/login/verify",(req,res)=>{
    console.log(req.body);
    const {id,pw}=req.body;
    const {id:uid,pw:upw}=userInfo;
    if(id === uid && pw === upw){
        const token = jwt.sign({id},secret);
        console.log(token);
        res.json({result:true,token,id})
    }else{
        res.send(`<script>alert('로그인 실패'); document.location.href='/';</script>`)
    }
})
// id:uid,pw:upw

app.get("/logout",(req,res)=>{
    let loginToken = localStorage.getItem("login-token");
    if ( loginToken === undefined){
        res.send(`<script> alert('잘못된 접근입니다'); document.location.href='/';</script>`)
    } else {
        loginToken.clear();
        res.redirect("/")
    }
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})