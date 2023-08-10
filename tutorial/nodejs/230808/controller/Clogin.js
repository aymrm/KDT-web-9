const Mlogin = require("../model/Mlogin");

exports.main = (req,res)=>{
    res.render("index");
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

exports.userMain = (req,res)=>{
    res.render("login");
}

exports.userLogin = (req,res)=>{
    Mlogin.userLogin(req.body,(result)=>{
        res.send({
            userid:req.body.userid,
            result,
        })
    })
}

exports.postProfile=(req,res)=>{
    console.log("req.body",req.body);
    Mlogin.postProfile(req.body,(result)=>{
        console.log("result",result);
        if(result.length>0){
            res.render("profile",{data : result[0]});
        }
    })
}

exports.editProfile=(req,res)=>{
    Mlogin.editProfile(req.body,()=>{
        res.send({result:true});
    })
}

exports.deleteProfile=(req,res)=>{
    Mlogin.deleteProfile(req.body.id,()=>{
        res.send({result:true});
    })
}