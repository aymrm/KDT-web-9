const http = require('http');
const ws = require('ws');
const express = require('express');
const app = express();
const server = http.createServer(app);
const wss = new ws.Server({server});

const PORT = 8000;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('client');
});


wss.on('connection',(socket)=>{
    console.log('클라이언트가 연결되었습니다');
    
    socket.on('message',(message)=>{
        console.log(`클라이언트로 부터 받은 메세지 ${message}`);
        // socket.send(`서버메시지: ${message}`);
        const data = JSON.parse(message);
        console.log(data);
        wss.clients.forEach((elem)=>{
            elem.send(`${data.name} : ${data.msg}`);
        })
    });
    
    socket.on('error',(err)=>{
        console.log(`에러가 발생 되었습니다`,err);
    });
    
    socket.on('close',()=>{
        console.log('연결이 종료되었습니다')
    })
});


server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})