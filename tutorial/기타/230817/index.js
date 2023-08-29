const express = require("express");
const crypto = require("crypto");
const app = express();
const PORT = 8000;
let pass = "";
const salt = crypto.randomBytes(16).toString("hex");
const leng = 1000;
const key = 64;
const algo = "sha512"

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/login",(req,res)=>{
    const {pw} = req.body;
    //const pass = crypto.createHash("sha512").update(pw).digest("base64");
    pass = crypto.pbkdf2Sync(pw,salt,leng,key,algo).toString("base64");
    pass2 = crypto.pbkdf2Sync(pass,salt,leng,key,algo).toString("base64");
    console.log("pass",pass.length);
    res.send({pass,pass2});
})

app.post("/verify",(req,res)=>{
    const {pw} = req.body;
    const compare = crypto.pbkdf2Sync(pw,salt,leng,key,algo).toString("base64");
    // const result = crypto.timingSafeEqual(compare,Buffer.from(pass,"hex"));
    console.log("buffer",Buffer.from(salt,"hex"))
    console.log("compare",compare.length);
    res.send(compare);
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});