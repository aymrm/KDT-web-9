const Cauth = require('./Cauth');
const Clogin = require('./Clogin');
const Cpage = require('./Cpage');
const Ctile = require('./Ctile');

///////////////////page 생성//////////////////////
const main = (req,res)=>{Cpage.main(req,res)};
const signUpMain = (req,res)=> {Cpage.signUp(req,res)};
const signInMain = (req,res)=> {Cpage.signIn(req,res)};
const profileMain = (req,res)=>{Cpage.profile(req,res)}


////////////////////로그인///////////////////////
const signUp = (req,res)=>{Clogin.signUp(req,res)};
const signIn = (req,res)=>{Clogin.signin(req,res)};



module.exports = {
    main,
    signUpMain,
    signInMain,
    profileMain,
    signUp,
    signIn
}