

var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function listner1(){
	console.log("listener 1 ");
}

var listener2 = function listner2(){
	console.log("listener 2 ");
}

eventEmitter.addListener("connection", listener1);

eventEmitter.on("connection",listener2);

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,"connection");

console.log(eventListeners + " Listeners listening to connection event");

eventEmitter.emit("connection");

eventEmitter.removeListener("connection" , listener1);

console.log("Listener 1 will not listen now");

eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,"connection");

console.log(eventListeners + " Listeners listening to connection event");

eventEmitter.emit("connection");

