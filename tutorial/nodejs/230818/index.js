const express = require('express');
const app = express();
const PORT = 8000;
let hash = "";
require("dotenv").config();

//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get('/', (req, res) => {
    console.log(process.env.NAME);
    console.log(process.env.NODE_ENV);
    res.render('index');
});

app.post("/hash",(req,res)=>{
    const { pw } = req.body;
    // const hash = createHashedPassword(pw);
    // hash = createPbkdf(pw);
    hash = bcryptPassword(pw);
    res.json({hash});
})

app.post("/verify",(req,res)=>{
    const {pw} = req.body;
    // const compare = verifyPassword(pw,salt,hash);
    const compare = comparePassword(pw,hash);
    res.json({compare});
})

app.post("/cipher",(req,res)=>{
    const{data}=req.body;
    const encrypt = cipherEncrypt(data);
    console.log("encrypt",encrypt);
    const decrypt = cipherDecrypt(encrypt);
    res.json({encrypt,decrypt});
})

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


const crypto=require("crypto");
const createHashedPassword = (password)=>{
    return crypto.createHash("sha512").update(password).digest("base64");
}

const salt = crypto.randomBytes(16).toString("base64");
const iteration = 100;
const keylen = 64;
const digest = "sha512"

const createPbkdf = (password)=>{
    const hash = crypto.pbkdf2Sync(password,salt,iteration,keylen,digest).toString("base64");
    console.log("hash len",hash.length);
    return hash;
}
// pbkdf2sync 반환되는 값은 Buffer값

const verifyPassword = (password,salt,dbPassword)=>{
    const compare = crypto.pbkdf2Sync(password,salt,iteration,keylen,digest).toString("base64");
    if (compare === dbPassword){
        return true;
    } else {
        return false;
    }
}

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipherEncrypt = (word)=>{
    const cipher = crypto.createCipheriv(algorithm,key,iv);
    let encryptedData = cipher.update(word,"utf-8","base64");
    encryptedData += cipher.final("base64");
    return encryptedData;
}

const cipherDecrypt = (encryptedData)=>{
    const decipher = crypto.createDecipheriv(algorithm,key,iv);
    let decryptedData = decipher.update(encryptedData,"base64","utf-8");
    decryptedData += decipher.final("utf-8");
    return decryptedData;
}

const bcrypt = require("bcrypt") ;
const saltNumber = 10 ;
const bcryptPassword = (password) => {
    return bcrypt.hashSync(password,saltNumber);
}

const comparePassword = (password,dbPassword) => {
    return bcrypt.compareSync(password,dbPassword);
}

