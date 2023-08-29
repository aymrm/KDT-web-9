const Model = require('../model/Model');

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
    Model.checkData(req.cookies.logined,(rows)=>{
        console.log("cookie",req.cookies);
        console.log("rows",rows);
        res.render('profile',{data:rows.data[0]})
    })
}


//////////////////////////post///////////////////////////



exports.signUpPost = (req,res)=>{
    Model.dbSignUp(req.body,()=>{
        res.json({result:true});
    })
}

function cookieSetting (){
    return {
        maxAge:60*60*1000,
        httpOnly:true,
        path:'/profile'
    }
}

exports.signInPost = (req,res)=>{
    Model.dbSignIn(req.body,(result)=>{
        if(result.length>0){
            res.json({result:true, data:result[0]});
        } else {
            res.json({result:false});
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
    Model.checkData(cookie.logined,(result)=>{
        res.send(result)
    })
}


///////////////////////////patch//////////////////////////

exports.updateProfile = (req,res)=>{
    console.log("cookie",req.cookies)
    Model.updateProfile(req.body,req.cookies.logined,(result)=>{
        res.send({result})
    })
}