var http = require('http');
http.createServer(function (request, response) {

  var jsonData = "";

  request.on('data', function (chunk) {

    jsonData += chunk;
  });
  
  request.on('end', function () {

    var requestObject = JSON.parse(jsonData);

    var responseObject = {
      message: "Hello " + requestObject.name,
      question: "Are you a good " + requestObject.occupation + "?"
    };

    response.writeHead(200);
    response.end(JSON.stringify(responseObject));

    console.log(requestObject.name);
    console.log(requestObject.occupation);

  });
}).listen(1080);

console.log("server is listened in 8080");
