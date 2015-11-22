var express = require("express");
var app = express();
// 이 방법 사용시 서버를 시작하기전에 환경 값을 설정해 포트를 오버라이드 가능하다. 
app.set("port",process.env.PORT||3000);


// get()은 라우터를 추가하는 메서드이다
app.get("/", function(req,res){
    res.type("text/plain");
    res.send("MeadowLark Travel");
});

app.get("/about", function(req,res){
    res.type("text/plain");
    res.send("About");
});

// 404 커스텀 페이지
app.use(function(req,res){
    res.type("text/plain");
    res.status(404);
    res.send("404 - not found");
});

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.type("text/plain");
    res.stats(500);
    res.send("500 - server error");
});

app.listen(app.get("port"),function(){
    console.log("Express started on 127.0.0.1: " + app.get("port") + " press ctrl + c to terminate");

});
