var http = require('http');
var url = require('url');
var fs =require('fs');

var server = http.createServer(function (req, res){
  var urlObj = url.parse(req.url,true);
  filename = urlObj.pathname.replace("/","")+".html";

  console.log(urlObj);
  console.log(urlObj.pathname);
  console.log(filename);
  fs.readFile(filename, function(err ,data){

    if(err){
      res.writeHead(404,{"Content-Type": "text/plain"});
      res.end("404 NotFound\n");
      throw err;
    }
    res.writeHead(200,{"Content-Type" : "text/html;"});
    res.end(data);
  });


}).listen(1234);

console.log("server Running");
