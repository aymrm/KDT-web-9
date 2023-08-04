const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views","./views");

const comments = [
    {
        id : 1,
        userid : "yu",
        date : "2023-08-04",
        comment : " 반갑습니다 "
    },
    {
        id : 2,
        userid : "gu",
        date : "2023-08-04",
        comment : " 안녕하세요 "
    },
    {
        id : 3,
        userid : "min",
        date : "2023-08-04",
        comment : " 잘부탁드려요 "
    },
    {
        id : 4,
        userid : "kim",
        date : "2023-08-04",
        comment : " 잘부탁합니다 "
    }
]

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/comments",(req,res)=>{
    res.render("comments",{commentInfos:comments});
})

app.get("/comments/:id",(req,res)=>{
    // console.log(req.params);
    // console.log(req.params.id);
    const commentId = req.params.id;
    console.log(comments[commentId-1]);
    res.render("comment",{commentInfo:comments[commentId-1]});
})
// :id로 하면 위에서 req에 들어오는 id 값을 안에 써줌
// :id 같은 값에 접근할때는 query가 아니라 params를 쓴다.

app.get("*",(req,res)=>{
    res.render("404");
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})