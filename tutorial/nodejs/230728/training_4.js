const express=require("express");
const app = express();
const PORT = 8000;

app.set("view engine","ejs");
app.set("views","./views");

app.use("/training4",express.static("./public"));

app.get("/main",(req,res)=>{
    res.render("training4_main" , {link:["/main","/page1","/page2"]});
})

app.get("/page1",(req,res)=>{
    res.render("training4_page1" , {link:["/main","/page1","/page2"]});
})

app.get("/page2",(req,res)=>{
    res.render("training4_page2" , {link:["/main","/page1","/page2"]});
})

app.listen(PORT,()=>{
    console.log("http://localhost:${PORT}");
})