const express = require("express");
const app = express();
// 아마 여러 express 함수를 사용할건데 수정한게 모든것에 적용되지 않도록 하는듯
const PORT = 8000;
// 서버 번호? 같은걸 저장하는 변수로 쓰는듯


app.set("view engine","ejs");
// 서버의 속성을 설정하는 set 함수에서 view engine 속성을 ejs로 설정한다는 것
app.set("views", "./views");
// views라는 폴더가 있는 곳에서 ejs 파일을 찾으라는 것


// 정적인 파일 불러오기
app.use("/public",express.static("./public"))
// ./public이라는 경로에 있는 파일에서 참조를 하되 경로를 앞의 /public으로 대체해 쓰는 것


app.get("/",(req,res)=>{
    // res.send("Hello Express");
    res.send({result:true , code:1000 , message: "회원가입 성공" , data: {"name":"martin"}});
    // 회사마다 사용하는 코드가 다름
    // send()는 클라이언트에 응답 데이터를 보낼때 사용한다
})
// localhost:8000 뒤에 /를 붙인다는 것

app.get("/kdt9",(req,res)=>{
    res.render("test" , {name:"martin"})
    // views 폴더에 있는 파일명을 값으로 받는다. ejs 파일을 여는거라 보면 됨
    // 코드를 쭉 읽어서 완성시키는 것을 렌더링이라 한다는데 좀 더 봐야 알듯
    // render는 뒤에 인자를 받아서 보낼수도 있다는 것 같다
    // test.ejs 파일을 열어서 코드를 쭉 읽되 그 안에서 =name에 해당하는게
    // martin으로 치환되서 읽히는 것

    // res.send("Hello kdt9");
})
// localhost:8000 뒤에 /kdt9를 붙인다는 것

app.listen(PORT,()=>{
    console.log("http://localhost:${PORT}");
})
// 서버를 열어주는 함수 여기서 콘솔은 아래의 터미널창