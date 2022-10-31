var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Context-Type':'text/html'});
    res.end('<h1>you have connected to the server</h1>');
}).listen(8080);
console.log('server started..running on local host:8080');