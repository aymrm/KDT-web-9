const mysql = require('mysql');

//mysql연결
const conn = mysql.createPool({
    host: 'localhost',
    user: 'aymrm',
    password: '1234',
    database: 'kdt9',
    port: 3306,
    connectionLimit: 30, //최대 연결 수 기본값 10
});

// 회원가입 정보를 데이터 베이스에 저장
const dbSignUp=(data,cb)=>{
    const query = 'INSERT INTO user (userid,pw,name) VALUES (?,?,?)'
    conn.query(query,[data.userid,data.pw,data.name],(err,rows)=>{
        if (err){
            console.log(err)
            return;
        }
        console.log
        cb();
    })
}

// insert into 

const dbSignIn=(data,cb)=>{
    const query = `SELECT * FROM user WHERE userid = ? AND pw= ? `
    conn.query(query,[data.userid,data.pw],(err,rows)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('dbSignIn',rows);
        cb(rows);
    })
}

const checkData = (id,cb)=>{
    if(id == undefined){
        cb(false)
    }
    const query = `SELECT * FROM user WHERE id = ?`
    conn.query(query,id,(err,rows)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('check data',rows);
        cb({result:true , data:rows})
    })
}

const updateProfile = (data,id,cb)=>{
    const {userid,pw,name} = data
    const query = `UPDATE user SET userid=? , pw=? , name=? WHERE id=?`
    conn.query(query,[userid,pw,name,Number(id)],(err,rows)=>{
        if(err){
            console.log(err);
            return false;
        }
        console.log("update profile",rows);
        cb(true);
    })
}

module.exports = {
    dbSignIn,
    dbSignUp,
    checkData,
    updateProfile,
}