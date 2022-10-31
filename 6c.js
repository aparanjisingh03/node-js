const http=require('http');
var dbmodule=require("./module");
var server=http.createServer((request,response)=>{
    result=dbmodule.authenticateUser(1000,2);
    response.writeHead(200,{"context-type":"text/html"});
    response.end("<html><body><h1>"+result+"-you have connected to the localhost 1002</h1></body></html>");
    console.log("request recieved");
});
server.listen(1002);
console.log("server is reunning at port 1002");