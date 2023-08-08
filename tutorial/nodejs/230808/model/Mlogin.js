const mysql = require("mysql");

const conn = mysql.createConnection({
    host:"localhost",
    user:"aymrm",
    password:"1234",
    database:"kdt9",
    port:3306
})
conn.connect((err)=>{
    if(err){
        console.log("error");
        return;
    }
    console.log("connect");
})

exports.registerId = (data,cb)=>{
    const query = `INSERT INTO user (userid,name,pw) VALUES ("${data.userid}","${data.name}","${data.pw}")`
    console.log(query);
    conn.query(query,(err,rows)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("rows",rows);
        cb(true);
    })
}

exports.userLogin = (data,cb)=>{
    console.log("data",data);
    const query = `SELECT userid , pw FROM user where userid="${data.userid}" and pw="${data.pw}"`
    conn.query(query,(err,rows)=>{
        if(err){
            console.log(err);
            return;
        }
        if(rows.length==0){
            cb(false)
            return;
        }
        console.log("rows",rows);
        cb(true);
    })
}