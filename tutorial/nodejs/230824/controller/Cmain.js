const {User}=require('../models');
const crypto = require('crypto');
require("dotenv").config();


//////////////////////////get//////////////////////


exports.main = (req,res)=>{
    const isLogin = req.cookies.logined;
    res.render('index',{isLogin});
}

exports.signUp = (req,res)=>{
    res.render('signup')
}

exports.signIn = (req,res)=>{
    res.render('signin')
}

exports.getList = (req,res)=>{
    const userInfo = req.session.userInfo;
    console.log("getlist userinfo",userInfo);
    if (userInfo){
        User.findAll().then((data)=>{
            console.log("get list findall data",data);
            res.render('list',{data,userInfo});
        })
    } else {
        res.redirect('/');
    }
}


////////////////////////post////////////////////


async function idCheck(userid){
    const result = await User.findAll({where:{userid}})
    console.log("idCheck res",result);
    if(result.length > 0){
        return false;
    } else {
        return true;
    }
}

exports.signUpPost = async (req,res)=>{
    const {userid,name,pw}=req.body
    const flag = await idCheck(userid)
    console.log("user idcheck",flag);
    if (flag){
        const {KEYLEN,DIGEST:digest,MAXINT,MININT} = process.env;
        const keylen = Number(KEYLEN);
        const maxint = Number(MAXINT);
        const minint = Number(MININT);
        const salt = crypto.randomBytes(minint).toString("base64");
        const iter = crypto.randomInt(maxint)+minint;
        const hash = await crypto.pbkdf2Sync(pw,salt,iter,keylen,digest).toString("base64");
        User.create({userid,name,pw:hash,salt,iter}).then(()=>{
            res.json({result:true});
        })
    } else{
        res.json({result:false, message:"id가 중복되어 사용할 수 없습니다"});
    }
}

const cookieConfig ={
        maxAge:60*1000,
        httpOnly:true,
}

exports.signInPost = (req,res)=>{
    const {userid , pw} = req.body;
    User.findAll({where:{userid}}).then((result)=>{
        if(result.length>1){
            console.log('database error 아이디 중복')
            return;
        } else if(result.length === 1) {
            const data = result[0]
            const {userid, iter , salt , pw:dbPw} = data;
            const {KEYLEN,DIGEST:digest} = process.env;
            const keylen = Number(KEYLEN);
            const hash = crypto.pbkdf2Sync(pw,salt,iter,keylen,digest).toString("base64");
            if(dbPw === hash){
                req.session.userInfo = userid
                console.log("session",req.session.userInfo);
                res.cookie('logined',userid,cookieConfig);
                res.send({result:true, message:"회원가입에 성공했습니다"})
            } else {
                res.send({result:false, message:"pw가 일치하지 않습니다"})
            }
        } else {
            res.json({result:false, message:"id가 존재하지 않습니다"})
        }
    })
}