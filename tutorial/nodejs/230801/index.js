const express = require("express");
const app = express();
const PORT = 8000;


app.use(express.urlencoded({extended:true}));
app.use(express.json());
// 받은 정보를 분석하는데 사용하는 body parser인데 그냥 항상 넣으면 되는듯


app.set("view engine","ejs");
// 서버의 속성을 설정하는 set 함수에서 view engine 속성을 ejs로 설정한다는 것
app.set("views", "./views");
// views라는 폴더가 있는 곳에서 ejs 파일을 찾으라는 것

/*
app.post("/",(req,res)=>{
    console.log(req.body);
});
// 모두 다 post로 써도 되기는 하나 기능에 따라 이름을 나눠둔 느낌인듯
// 정보를 받는건 get으로 정보를 보내는건 post로 하는게 일반적
// get만 req.query , post등 나머지는 req.body로 받으면 된다
*/

app.get("/",(req,res)=>{
    res.render("index", {title:"폼 전송 실습"});
});

app.get("/getForm",(req,res)=>{
    console.log(req.query);
    res.render("result",{
        title:"GET요청 폼 결과 확인하기",
        userInfo:req.query
    })
});

app.post("/postForm",(req,res)=>{
    console.log(req.body);
    res.render("result",{
        title:"POST요청 폼 결과 확인하기",
        userInfo:req.body
    })
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});