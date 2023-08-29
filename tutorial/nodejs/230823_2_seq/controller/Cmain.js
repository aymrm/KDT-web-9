// const Model = require('../model/Model');
const User = require('../models/index').User;
const crypto = require("crypto");
require("dotenv").config();

//////////////////////////get///////////////////////////


exports.main = (req, res) => {
    res.render('index');
};

exports.signUp = (req,res)=>{
    res.render('signup')
}

exports.signIn = (req,res)=>{
    res.render('signin')
}

exports.profileMain = (req,res)=>{
    User.findOne({
        where:{id:req.cookies.logined}
    }).then((result)=>{
        res.render('profile',{data:result});
    })
}


//////////////////////////post///////////////////////////

async function idCheck(userid){
    const result = await User.findAll({where:{userid}})
    console.log("idCheck res",result);
    if(result.length > 0){
        return false;
    } else {
        return true;
    }
}

exports.signUpPost = (req,res)=>{
    const {userid,name,pw}=req.body
    const flag = idCheck(userid)
    console.log("user idcheck",flag);
    if (flag){
        const {KEYLEN,DIGEST:digest,MAXINT,MININT} = process.env;
        const keylen = Number(KEYLEN);
        const maxint = Number(MAXINT);
        const minint = Number(MININT);
        const salt = crypto.randomBytes(minint).toString("base64");
        const iter = crypto.randomInt(maxint)+minint;
        const hash = crypto.pbkdf2Sync(pw,salt,iter,keylen,digest).toString("base64");
        User.create({userid,name,pw:hash,salt,iter}).then(()=>{
            res.json({result:true});
        })
    } else{
        res.json({result:false, message:"id가 중복되어 사용할 수 없습니다"});
    }
}

function cookieSetting (){
    return {
        maxAge:60*60*1000,
        httpOnly:true,
    }
}

exports.signInPost = (req,res)=>{
    const {userid , pw} = req.body;
    User.findAll({where:{userid}}).then((result)=>{
        if(result.length>1){
            console.log('database error 아이디 중복')
            return;
        } else if(result.length === 1) {
            const data = result[0]
            const {pw:dbPw , salt , iter} = data;
            const {KEYLEN,DIGEST:digest} = process.env;
            const keylen = Number(KEYLEN);
            const hash = crypto.pbkdf2Sync(pw,salt,iter,keylen,digest).toString("base64");
            if(dbPw === hash){
                res.json({result:true,data})
            } else {
                res.json({result:false, message:"pw가 일치하지 않습니다"})
            }
        } else {
            res.json({result:false, message:"id가 존재하지 않습니다"})
        }
    })
}

exports.setCookie = (req,res)=>{
    res.cookie('logined',req.body.id,cookieSetting())
    res.send({result:true});
}

exports.checkData = (req,res)=>{
    const cookie = req.cookies
    console.log("cookie",cookie);
    if (cookie.logined === undefined){
        res.json({result:false , message:"로그인 상태가 아닙니다"})
    }
    User.findOne({where:{id:cookie.logined}}).then((result)=>{
        console.log("cookie findone data",result)
        res.json({result:true, data:result})
    })
}


///////////////////////////patch//////////////////////////


exports.updateProfile = (req,res)=>{
    const {name,pw} = req.body
    const id = req.cookies.logined 
    User.update({name,pw},{where : {id}}).then(()=>{
        res.json({result});
    })
}


/////////////////////////delete///////////////////////////