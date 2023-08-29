const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

let members = [
    {
        id:1,
        name:"성제",
        gender:"남자",
        major:"수학",
    },
    {
        id:2,
        name:"본도",
        gender:"남자",
        major:"마작",
    },
    {
        id:3,
        name:"27",
        gender:"군인",
        major:"소총",
    },
    {
        id:4,
        name:"경민",
        gender:"??",
        major:"마술",
    },
    {
        id:5,
        name:"남현",
        gender:"공허",
        major:"롤",
    }
] 

module.exports = members;
