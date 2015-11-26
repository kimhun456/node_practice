var express = require("express");
var app = express();
var fortune = require("./libs/fortunes.js")
var handlebars = require("express-handlebars").create({defaultLayout:'main'});
app.engine("handlebars",handlebars.engine);
app.set('view engine', 'handlebars');

console.log("view engien is handlebars");


// 정적인 파일을 저장할수 있는 public 폴더를 지정해준다.
// static 이라는 미들웨어사용!!!
app.use(express.static(__dirname + '/public'));

console.log("static folder is added");


// 이 방법 사용시 서버를 시작하기전에 환경 값을 설정해 포트를 오버라이드 가능하다.
app.set("port",process.env.PORT||3000);

app.use(function(req, res, next){
	res.locals.showTests = app.get('env') !== 'production' &&
		req.query.test === '1';
	next();
});
// get()은 라우터를 추가하는 메서드이다
app.get("/", function(req,res){
    res.render("home");
});

app.get("/about", function(req,res){
  res.render("about", {
    fortunes: fortune.getFortunes(),
    pageTestScript : "/qa/test-about.js" })
});

// 404 커스텀 페이지
app.use(function(req,res){
    res.status(404);
    res.render("404");
  });

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500);
    res.render("500");
});

app.listen(app.get("port"),function(){
    console.log("Express started on 127.0.0.1: " + app.get("port") + " press ctrl + c to terminate");

});
