const nameSpace = ['/','/new'];

const main = (req,res)=>{
    res.render('index');
}

const newMain = (req,res)=>{
    res.render('new');
}


const connection = (io,socket,loc)=>{
    socket.on('userLog',()=>{
        console.log(`${loc}접속`)
    })
}
// 새로운 함수를 정의하는게 아닌 이 안에 모두 동작 함수를 넣어야함

module.exports = {
    nameSpace,
    main,
    newMain,
    connection,
}