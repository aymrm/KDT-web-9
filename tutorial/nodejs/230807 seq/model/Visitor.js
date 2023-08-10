const mysql = require("mysql");

const conn = mysql.createConnection({
    host:"localhost",
    user:"aymrm",
    password:"1234",
    database:"kdt9",
    port:3306
})

conn.connect((err)=>{
    if (err){
        console.log("error");
        return;
    }
    console.log("connect");
})

exports.getVisitors = (cb)=>{
    const query = `SELECT * FROM visitor`
    conn.query(query,(err,rows)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(rows);
        cb(rows);
    })
}

exports.getVisitor = (id,cb)=>{
    const query = `SELECT * FROM visitor WHERE id=${id}`
    conn.query(query,(err,rows)=>{
        if(err){
            console.log(err);
            return;
        }
        cb(rows);
    })
}

exports.postVisitor = (data, cb)=>{
    console.log("data",data);
    const query = `INSERT INTO visitor (name,comment) VALUES ("${data.name}","${data.comment}")`;
    console.log("query",query);
    conn.query(query,(err,rows)=>{
        console.log("rows",rows);
        cb(rows);
    })
}

exports.patchVisitor =(data,cb)=>{
    const query = `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}`
    conn.query(query,(err,rows)=>{
        console.log("rows",rows);
        if(err){
            console.log(err);
            return;
        }
        cb();
    })
}

exports.deleteVisitor = (data,cb)=>{
    const query = `DELETE FROM visitor WHERE id=${data.id}`
    conn.query(query,(err,rows)=>{
        if(err){
            console.log(err);
            return;
        }
        cb();
    })
}