const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/uploads",express.static(__dirname+"/uploads"));

const upload = multer({
    dest : "uploads/"
    // 업로드할 파일을 저장할 경로를 지정
})
const uploadDetail = multer({
    storage : multer.diskStorage({
        destination(req , file , done){
            done(null,"uploads/")
        },
        filename(req,file,done){
            const ext=path.extname(file.originalname);
            console.log("ext",ext);
            done(null,path.basename(file.originalname,ext) + Date.now() + ext);
        }
    }),
    // storage : 저장할 공간에 대한 정보
    // diskstorage : 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
    // done은 단순 콜백함수라 아무 이름을 적어도 상관 없음
    // "uploads/"는 위의 dest랑 동일하게 잡아주는 것
    // done 안에 null 자리는 예외처리를 넣는 곳이라 한다
    limits : { fileSize : 5 * 1024 * 1024},
})

app.set("view engine","ejs");
app.set("views","./views");

app.get("/",(req,res)=>{
    res.render("index");
})


app.post("/upload", uploadDetail.single("userfile") ,(req,res)=>{
    console.log(req.file);
    console.log(req.body);
})

app.post("/upload/array",uploadDetail.array("userfiles"),(req,res)=>{
    console.log(req.files);
    console.log(req.body);
})

app.post("/upload/fields",uploadDetail.fields([{name:"userfile1"},{name:"userfile2"}]),(req,res)=>{
    console.log(req.files);
    console.log(req.body);
})

app.post("/dynamicFile",uploadDetail.single("dynamic-file"),(req,res)=>{
    console.log(req.file);
    res.send(req.file);
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})