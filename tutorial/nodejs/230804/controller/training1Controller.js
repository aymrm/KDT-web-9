const MController = require("../model/training1MController");
const userInfo= MController.userInfo();
const {userId , userPw } = userInfo;


exports.main = (req,res)=>{
    res.render("training1");
};


exports.loginAxiosPost = (req,res)=>{
    let flag = false;
    if (req.body.userInputId===userId && req.body.userInputPw===userPw){
        flag = true;
    }
    console.log(req.body);
    res.send(flag);
}