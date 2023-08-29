const Model = require('../model/Model');

exports.main = (req, res) => {
    res.render('index');
};

exports.member = (req,res)=>{
    res.render("member",{lists : Model});
}

exports.addMember = (req,res)=>{
    Model.push(req.body);
    res.send(req.body);
}