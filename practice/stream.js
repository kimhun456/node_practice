

var fs = require("fs");

var data = "";

var readerStream = fs.createReadStream("input.txt");

readerStream.setEncoding("UTF8");

readerStream.on("data", function(chunk){
	console.log("data");
	data += chunk;
});

readerStream.on("end", function(){
	console.log("end");
	console.log(data);
	
});

readerStream.on("error", function(err){
	console.log(err.stack);
});

data = "Simply Easy Learning";

var writerStream = fs.createWriteStream("output.txt");

writerStream.write(data, "UTF8");

writerStream.end();

writerStream.on("finish" , function(){
	console.log("Write Complete");
});

writerStream.on("error", function(err){
	console.log(err.stack);
});

console.log("Program Ended");

