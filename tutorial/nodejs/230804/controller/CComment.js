// Comment Controller

const Comment = require("../model/MController");
const comments = Comment.comments();

exports.main = (req,res)=>{
    res.render("index");
}

exports.comments = (req,res)=>{
    res.render("comments",{commentInfos:comments});
};

exports.comment = (req,res)=>{
    // console.log(req.params);
    // console.log(req.params.id);
    const commentId = req.params.id;
    console.log(comments[commentId-1]);
    res.render("comment",{commentInfo:comments[commentId-1]});
};