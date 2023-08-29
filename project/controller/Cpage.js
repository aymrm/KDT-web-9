const {User} = require('../models');

const main =(req,res)=>{
    res.render('index');   
}

const signUp = (req,res)=>{
    res.render('signup');
}

const signIn = (req,res)=>{
    res.render('signin');
}

const profile = (req,res)=>{
    User.findOne({
        where:{id:req.cookies.logined}
    }).then((result)=>{
        res.render('profile',{data:result});
    })
}


module.exports = {
    main,
    signUp,
    signIn,
    profile,
}