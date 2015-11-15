var net = require('net');
var port = 1337;
var server = net.createServer(function(socket) {
	console.log("--------connection------");
	socket.setEncoding("utf8");

	// send(socket, "Echo Server");

	socket.on('data',function(data){
		console.log("recieved data : " + data.toString());
		socket.write(data);
		console.log("send data  : " + data.toString());
	});

	socket.on("end", function(){
		console.log("--------client leave --------");
	});

	socket.on("error",function(err){
		console.log(err);
	});

});


server.listen(port);

console.log("server start in 52.69.176.156 port 1337");
