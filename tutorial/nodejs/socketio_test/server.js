const http = require('http');
const express = require('express');
const SocketIo = require('socket.io');

const app = express();
const PORT = 8000;

const server = http.createServer(app);

const io = SocketIo(server);

let msg_log=[];

let monster = [{
    name : 'dragon' ,
    hp : 3000 ,
    att : 30 ,
    def : 20 ,
    exp : 10 ,
    skill : [{
        name : "breath",
        dmg : 50,
        pro : "fire",
    }
    ]
},{
    name : 'monster2' ,
    hp : 100 ,
    att : 30 ,
    def : 20 ,
    exp : 10 ,
},{
    name : 'monster3' ,
    hp : 100 ,
    att : 30 ,
    def : 20 ,
    exp : 10 ,
},{
    name : 'monster4' ,
    hp : 100 ,
    att : 30 ,
    def : 20 ,
    exp : 10 ,
}]

app.set('view engine','ejs');
app.use("/img",express.static(__dirname+"/img"));

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/dungeon',(req,res)=>{
    res.render('dungeon');
});
app.get('/home',(req,res)=>{
    res.render('home');
});
app.get('/hospital',(req,res)=>{
    res.render('hospital');
});


io.on('connection',(socket)=>{
    socket.on('userLog',(e)=>{
        let user_damage = Math.floor(Math.random()*10);
        let monster_damage = Math.floor(Math.random()*20);
        if(e==="1"){
            socket.emit('damage',{user_damage,monster_damage});
        } else if (e==='2'){
            user_damage = Math.floor(user_damage/2);
            monster_damage = 0;
            socket.emit('damage',{user_damage,monster_damage});
        } else if (e==='3'){
            socket.emit('serverLog','도망가기 실패했다');
        } else {
            socket.emit('serverLog',"error");
        }
    })
    // msg_log.forEach((e)=>{
    //     socket.emit('middleConnect',e);
    // })
    // socket.on('wake-up',(msg)=>{
    //     console.log(msg);
    // })
    // socket.on('form-message',(arg)=>{
    //     console.log(arg);
    //     msg_log.push(arg);
    //     socket.emit('chat-gener',arg);
    // })
})


server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})