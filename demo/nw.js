
var http = require('http');

var handleRequest = function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.write("Hi，Node.js");
    response.end();
}

var server = http.createServer(handleRequest);
server.listen(1688,'127.0.0.1',function(){
    console.log("伺服器已啟動");
});



