const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const PORT = 8000;
const db = require('./models');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret:'mySessionSecret',
    resave:false,
    // 세션 데이터가 변경되지 않더라도 세션을 다시 저장할지 여부
    // default : true
    saveUninitialized:true,
    // 세션 데이터가 초기화가 되지 않은 상태에서도 세션을 저장할지 여부
    cookie:{
        httpOnly:true,
        maxAge: 60 * 1000,
    }
    // 없어도 되는 옵션이긴 함
}));

//router 분리
const router = require('./routes/main');
app.use('/', router);

//오류처리
app.use('*', (req, res) => {
    res.status(404).render('404');
});

db.sequelize.sync({force:true}).then(()=>{
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
})

