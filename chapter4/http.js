var http = require('http');
var https = require('https');
var server = http.createServer(function(request,response){
  var date = new Date();
  response.writeHead(200,{
    'Content-Type' : "text/html",
    'Set-Cookie' :
    [
      'authorized = yes; Expires =' + date.toUTCString(),
      'no_popup = yes'
    ]
  });
  response.end("<b>Hellod</b>");
});
server.listen(1234, function (){
  console.log("server start");
});
server.on('connection', function(){
  console.log("server is conncected");
});

server.on('close',function(){
  console.log("server is closed");
});
