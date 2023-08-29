const model = require('../model/Model');

exports.main = (req, res) => {
    res.render('index');
};

exports.commentsMain = (req,res)=>{
    res.render("comments",{lists : model});
}

exports.commentMain = (req,res)=>{
    res.render("comment",{data:model[Number(req.params.id)-1]})
}