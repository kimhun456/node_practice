var http = require('http');
var express = require('express');
var app = express();

app.set("view engine", 'jade');

app.set("views","./views");

app.use(express.static('./public'));

app.get("/", function (req,res) {
  res.render("index");
});

app.get("/say-hello", function (req,res) {
  res.render("hello");
});

app.get("/test", function (req,res) {
  res.send("<h1> TEST </h1>")
});


http.createServer(app).listen(3000,function(){
  console.log("Express app started");
});
