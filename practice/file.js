

var fs = require("fs");


console.log("Going to Open File!");

fs.open("input.txt" , "r+", function(err, fd){

	if(err)
		return console.error(err);

	console.log("file open Success");

});

