var http = require('http');
var url = require('url');

// require 은 모듈을 불러오는 것이다.

// route라는 함수를 보내준다.
function start(route , handle){
  function onRequest(request, response) {
    // url모듈에 있는 parse라는 메소드의 값을 pathname에 넣어둔다.
    var pathname = url.parse(request.url).pathname;
    console.log("reqeust (" + pathname +  ") is recieved");
    route(handle, pathname, response, request);

  }

  // 이곳에서도 onRequest라는 함수를 보내준다.
  http.createServer(onRequest).listen(8888);
  console.log("server start");

}

exports.start = start;
