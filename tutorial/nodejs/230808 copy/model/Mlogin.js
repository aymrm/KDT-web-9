import mysql from "mysql2/promise";

const conn = mysql.createConnection({
    host:"localhost",
    user:"aymrm",
    password:"1234",
    database:"kdt9",
    port:3306
})
// create connection은 단일 연결이라 매번 연결이 필요하면 새로 연결함
// 연결수가 많아지면 성능에 영향이 생김

exports.duplicateId=(data)=>{
    const query =`SELECT userid FROM user where userid="${data.userid}"`;
    let flag = true;
    conn.query(query,(err,rows)=>{
        if(err){
            console.log(err);
            return;
        }
        if(rows.length>0){
            flag=false;
        }
    })
    return flag;
}

exports.registerId = (data,cb)=>{
    if(!this.duplicateId(data)){
        cb(false);
    }
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

exports.postProfile = (data,cb)=>{
    const query =`SELECT * FROM user where userid="${data.userid}"`;
    conn.query(query,(err,rows)=>{
        if(err){
            console.log(err);
            return;
        }
        cb(rows);
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

exports.editProfile = (data,cb)=>{
    const query = `UPDATE user SET userid="${data.userid}", pw="${data.pw}" , name="${data.name}" WHERE id=${data.id}`;
    conn.query(query,(err,rows)=>{
        cb();
    })
}

exports.deleteProfile = (id,cb)=>{
    const query = `DELETE FROM user WHERE id=${id}`;
    conn.query(query,(err,rows)=>{
        cb();
    })
}