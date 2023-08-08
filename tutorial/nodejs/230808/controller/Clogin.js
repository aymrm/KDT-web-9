const Mlogin = require("../model/Mlogin");

exports.main = (req,res)=>{
    res.render("index");
}

exports.userMain = (req,res)=>{
    res.render("login");
}

exports.registerMain = (req,res)=>{
    res.render("register");
}

exports.registerId = (req,res)=>{
    Mlogin.registerId(req.body,(result)=>{
        res.send({
            userid:req.body.userid,
            result,
        })
    })
}

exports.userLogin = (req,res)=>{
    Mlogin.userLogin(req.query,(result)=>{
        res.send({
            userid:req.query.userid,
            result,
        })
    })
}