
var fs = require("fs");

fs.stat("input.txt" , function(err, stats){
	if(err)
		return console.error(err);

	console.log(stats);

});
