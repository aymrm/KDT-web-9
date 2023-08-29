const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
})

const studentRouter=require("./routes/student");
app.use("/student",studentRouter);

db.sequelize.sync({force:true}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`);
    })
})