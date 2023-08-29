const {Student,StudentProfile,Classes} = require("../models");

exports.main=(req,res)=>{
    res.render("index");
}

exports.postStudent = async (req,res)=>{
    try {
        const {userid,password,email,name,major} = req.body;
        const user = await Student.create({
            userid,
            password,
            email,
            studentProfile:{
                name,
                major,
            }
            // models/studentProfile에 있는 실제 테이블 이름을 가져가느라 "studentProfile"을 가져옴
        },{
            include:StudentProfile,
            // include:[model:studentProfile]; 인데 여기서 맨 위에 정의한 StudentProfile 값을 가져감
        });
        console.log(user);
        res.send(user);
    } catch (error) {
        console.log(error);
    }
}
exports.postClass = async (req,res)=>{
    try {
        const {name,room,code,teacher,studentId} = req.body;
        const classes = await Classes.create({
            name,
            room,
            code,
            teacher,
            studentId
        })
        res.send(classes);
    } catch (error) {
        console.log(error);
    }
}

exports.getStudent = async (req,res)=>{
    try {
        const student = await Student.findAll({
            attributes:["id","userid","email"],
            include : [{model:StudentProfile , attributes:["major","name"]}]
            // 쿼리를 실행할때 관련된 모델의 데이터도 함께 조회할 수 있도록 하는 옵션
        })
        res.send(student);
    } catch (error) {
        console.log(error);
    }
}