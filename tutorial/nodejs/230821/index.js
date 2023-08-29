const express = require('express');
const multer = require('multer');
const path = require("path");
const app = express();
const PORT = 8000;


//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads",express.static(__dirname+"/uploads"));

const uploadDetail = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename: (req,file,cb)=>{
        const ext = path.extname(file.originalname);
        const newName = path.basename(file.originalname,ext) + Date.now() + ext;
        cb(null,newName);
    }
})

const limits = {
    fileSize : 5 * 1024 * 1024
}

const upload = multer({
    storage:uploadDetail,limits
});

app.post("/upload",upload.single("userfile"),(req,res)=>{
    console.log(req.file);
    res.send(req.body);
})

app.post("/upload/array",upload.array("userfiles"),(req,res)=>{
    console.log(req.files);
    res.send(req.body);
})

app.post("/upload/fields",upload.fields([{name:"userfile1"},{name:"userfile2"}]),(err,req,res)=>{
    console.log(req.files);
    res.send(req.body);
});

app.post("/dynamic",upload.single('dynamic'),(req,res)=>{
    console.log(req.file);
    res.send(res.file);
})

//router
app.use('/', (req, res) => {
    res.render('index');
});

app.use('*',(req,res)=>{
    res.render('404');
})

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
