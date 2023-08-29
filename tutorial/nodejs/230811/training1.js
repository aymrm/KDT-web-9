const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;
const flagDate = null;

app.set("view engine","ejs");
app.use(cookieParser());

const cookieConfig={
    httpOnly:true,
    maxAge:60*1000,
}

app.get("/",(req,res)=>{
    res.render("training1",{popup:req.cookies.modal});
})
// 아래에 modal hide로 적었어서 req.cookies에 { modal : "hide" } 가 존재

app.post("/setCookie",(req,res)=>{
    res.cookie("modal" , "hide" , cookieConfig);
    res.send({result:true , msg:"쿠키 생성 완료"});
});
// 쿠키이름 , 담고있는 메시지 , 쿠키 성질

app.listen(PORT,(req,res)=>{
    console.log(`http://localhost:${PORT}`);
})