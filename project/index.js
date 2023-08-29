const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;
const db = require('./models');

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const router = require('./routes/main');
app.use('/' , router);

app.use('*',(req,res)=>{
    res.status(404).render('404');
});

db.sequelize.sync({force:true}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`);
    })
});