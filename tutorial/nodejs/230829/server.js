const http = require('http');
const express = require('express');
const SocketIo = require('socket.io');

const app = express();
const PORT = 8000;

const server = http.createServer(app);

const io = SocketIo(server);

let user=[];

let msg_log=[];

app.set('view engine','ejs');

// app.get('/',(req,res)=>{
//     res.render('client');
// });

app.get('/',(req,res)=>{
    res.render('chat');
})

io.on('connection',(socket)=>{
    socket.on('join',(res)=>{
        user.push({
            socketId:socket.id,
            userName:res.userName
        })
        // 채팅방을 생성하는 방법은 join(방 아이디)
        socket.join(res.chatRoom);
        // 방이 없으면 생성하고 방이 있으면 그 방으로 들어간다
        socket.room = res.chatRoom;
        console.log(res.chatRoom)
        
        // broadcast는 나 자신을 제외한 전체 사용자에게 메시지 전달
        socket.broadcast.to(res.chatRoom).emit('create',`${res.userName}님이 입장하였습니다`)
        const roomInfo =io.sockets.adapter.rooms.get(res.chatRoom)?.size;
        console.log("io",roomInfo);
    })


    socket.on('message',(res)=>{
        msg_log.push(res);
        io.to(socket.room).emit('chat',res);
        // 특정 방의 전체 사용자에게 메시지 전달
    })

    socket.on('leave',()=>{
        socket.leave(socket.room);
        const roomInfo =io.sockets.adapter.rooms.get(socket.room)?.size;
        console.log(roomInfo);
    })

})

// io.on('connection',(socket)=>{
//     socket.on('userLog',(e)=>{
//         if(e==="1"){
//             console.log('client : hello');
//             socket.emit('serverLog','hello : 안녕하세요');
//         } else if (e==='2'){
//             console.log('client : study');
//             socket.emit('serverLog','study : 공부합시다!');
//         } else if (e==='3'){
//             console.log('client : bye');
//             socket.emit('serverLog','bye :잘가~');
//         } else {
//             socket.emit('serverLog',"error");
//         }
//     })
//     // msg_log.forEach((e)=>{
//     //     socket.emit('middleConnect',e);
//     // })
//     // socket.on('wake-up',(msg)=>{
//     //     console.log(msg);
//     // })
//     // socket.on('form-message',(arg)=>{
//     //     console.log(arg);
//     //     msg_log.push(arg);
//     //     socket.emit('chat-gener',arg);
//     // })
// })


server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})