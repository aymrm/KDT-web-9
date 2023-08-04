const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/uploads",express.static(__dirname+"/uploads"));

app.set("view engine","ejs");
app.set("views","./views");


const uploadDetail = multer({
    storage : multer.diskStorage({
        destination(req,file,done){
            done(null,"uploads/");
        },
        filename(req,file,done){
            const ext=path.extname(file.originalname);
            done(null,req.body.userId + ext);
        }
    })
})

app.get("/",(req,res)=>{
    res.render("training");
})

app.post("/upload",uploadDetail.single("userProfilePic"),(req,res)=>{
    const filePath=`<img src=${req.file.path}>`
    res.send(filePath);
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})