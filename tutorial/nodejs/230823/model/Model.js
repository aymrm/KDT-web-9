const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

const comments = [
    {
        id: 1,
        userid: "koromo",
        date: "2023-08-23",
        comment: "ㅎㅇ",
    },
    {
        id: 2,
        userid: "user02",
        date: "2023-08-23",
        comment: "ㅎㅇㅎㅇ",
    },
    {
        id: 3,
        userid: "yuri",
        date: "2027-02-27",
        comment: "??",
    },
    {
        id:4,
        userid: "rudlas",
        date: "2023-08-23",
        comment: "아이고...",
    },
]

module.exports = comments;