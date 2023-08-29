const {User} = require('../models');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const dbIdCheck = async (id) => {
    const result = await User.findAll({where:{id}})
    console.log("idCheck res",result);
    if(result.length > 0){
        return false;
    } else {
        return true;
    }
}

const pwHasing = async (pw)=>{
    const {KEYLEN,DIGEST:digest,MAXINT,MININT} = process.env;
    const keylen = Number(KEYLEN);
    const maxint = Number(MAXINT);
    const minint = Number(MININT);
    const salt = crypto.randomBytes(minint).toString("base64");
    const iter = crypto.randomInt(maxint)+minint;
    const hash = await crypto.pbkdf2(pw,salt,iter,keylen,digest).toString("base64");
    return {pw:hash,salt,iter};
}

const signUp = (req,res)=>{
    try {
        const {userid,name,pw}=req.body
        if (dbIdCheck(userid)){
            const {hash,salt,iter} = pwHasing(pw);
            User.create({userid,name,pw:hash,salt,iter}).then(()=>{
                res.json({result:true});
            })
        } else{
            res.json({result:false, message:"id가 중복되어 사용할 수 없습니다"});
        }
    } catch (error) {
        console.log(error);
    }
}

const dbPwCheck = async (dbPw,pw,salt,iter)=>{
    const {KEYLEN,DIGEST:digest} = process.env;
    const keylen = Number(KEYLEN);
    const hash = crypto.pbkdf2Sync(pw,salt,iter,keylen,digest).toString("base64");
    if(dbPw===hash){
        return true;
    } else if (dbPw!==hash){
        return false;
    } else {
        console.log("pw check error")
        return false;
    }
}

const cookieSetting = () => {
    const {MAXAGE,HTTPONLY} = process.env;
    const maxAge = Number(MAXAGE);
    const httpOnly = Boolean(HTTPONLY);
    return {
        maxAge,
        httpOnly,
    }
}

const signIn = (req,res)=>{
    try {
        const {userid , pw} = req.body;
        User.findAll({where:{userid}}).then((result)=>{
            if(result.length>1){
                console.log('database error 아이디 중복')
            } else if(result.length === 1) {
                const {pw:dbPw , salt , iter , uuid:id} = result[0];
                if(Cauth.dbPwCheck(dbPw,pw,salt,iter)){
                    const {LOGINCOOKIE:login} = process.env;
                    res.cookie(login, id ,Cauth.cookieSetting());
                    res.json({result:true,userid})
                } else {
                    res.json({result:false, message:"pw가 일치하지 않습니다"})
                }
            } else {
                res.json({result:false, message:"id가 존재하지 않습니다"})
            }
        })
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    dbIdCheck,
    pwHasing,
    signUp,
    dbPwCheck,
    cookieSetting,
    signIn,
}