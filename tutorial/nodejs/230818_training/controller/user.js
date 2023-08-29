const { User } = require('../models');
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.index = (req, res) => {
    res.render('index');
};

exports.registerMain = (req,res)=>{
    res.render("register");
}

exports.registerUser = async (req,res)=>{
    try{
        const { userid , name , pw } = req.body;
        const {KEYLEN,DIGEST:digest,MAXINT,MININT} = process.env;
        const keylen = Number(KEYLEN);
        const maxint = Number(MAXINT);
        const minint = Number(MININT);
        const salt = crypto.randomBytes(minint).toString("base64");
        const iter = crypto.randomInt(maxint)+minint;
        const hash = crypto.pbkdf2Sync(pw,salt,iter,keylen,digest).toString("base64");
        const user = await User.create({
            userid,
            name,
            pw : hash,
            salt,
            iter,
        })
        console.log(user);
        res.send({result:true , userid});
    } catch(error) {
        console.log(error);
    }
}

exports.loginMain = (req,res)=>{
    res.render('login');
}

exports.loginVerify = async (req,res)=>{
    try {
        const {userid , pw} = req.body;
        const user = await User.findOne({
            where:{userid}
        })
        const {KEYLEN,DIGEST:digest} = process.env;
        const keylen = Number(KEYLEN);
        const {iter , salt , pw:dbPw} = user;
        const hash = crypto.pbkdf2Sync(pw,salt,iter,keylen,digest).toString("base64");
        if (hash===dbPw){
            res.send({result:true,userid});
        } else{
            res.send({result:false,userid:""});
        }
    } catch (error) {
        console.log(error);
    }
}

exports.setCookie = (req,res)=>{
    
}