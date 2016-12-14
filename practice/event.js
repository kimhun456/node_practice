

var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
	
	console.log("connection SuccessFul");
	eventEmitter.emit("data_received");
}

eventEmitter.on("connection", connectHandler);

eventEmitter.on("data_received", function(){
	
	console.log("data_received Successfully.");

});

eventEmitter.emit("connection");

console.log("Program Ended.");
