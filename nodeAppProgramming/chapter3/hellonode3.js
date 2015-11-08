var EventEmitter = require('events').EventEmitter;

var evt = new EventEmitter();


evt.on("hellonode", function (str) {
  // body...
  console.log("Hello " +str);
});

setTimeout(function () {
  // body...
  evt.emit("hellonode","Nodejs");
},3000);
