const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views", "./views");

app.get("/",(req,res)=>{
    res.render("training",{link:["training1","training2"]});
})

app.get("/training1",(req,res)=>{
    res.render("training1",{
        title:"get으로 정보받기",
    });
});

app.get("/training1Result",(req,res)=>{
    console.log(req.query);
    res.render("training1Result",{
        title:"get으로 받은 정보 결과 확인",
        userInfo:req.query
    });
});

app.get("/training2",(req,res)=>{
    res.render("training2",{
        title:"post로 정보받기",
    });
});

app.post("/training2Result",(req,res)=>{
    console.log(req.body);
    res.render("training2Result",{
        title:"post로 받은 정보 결과 확인",
        userInfo:req.body
    });
});


app.post("/training2",(req,res)=>{
    console.log(req.body);
    res.render("training2",{
        title:"post로 정보받기",
        userInfo:req.body
    });
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});