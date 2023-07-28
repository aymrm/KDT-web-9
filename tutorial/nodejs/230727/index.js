const mod = require("./module.js");
const {a,b}=require("./module.js");
// console.log(mod.a , mod.b , a , b);

const http = require("http");
// 관례상 모듈 이름을 그대로 적는다고 함

const fs = require("fs");

const server = http.createServer(function(request,response){
    // response.writeHead(200);
    // response.write("<h1> hello world 27</h1>");
    // response.end("<p>End</p>");


    try{
        const data=fs.readFileSync("./index.html")
        response.writeHead(200);
        response.end(data);
    } catch{
        console.log(error)
        response.writeHead(404);
        response.end(error.message);
    }
});

server.listen(27272,function(){
    console.log("27272번 포트로 실행");
})
