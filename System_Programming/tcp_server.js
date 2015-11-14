var net = require('net');
var port = 1337;
var server = net.createServer(function(socket) {
	console.log("new Connction");
	socket.setEncoding("utf8");

	// send(socket, "Echo Server");

	socket.on('data',function(data){
		console.log(data.toString());
		socket.write(data);
	});

	socket.on("connection", function(){
		console.log("------connection------");
		rePrompt(socket);
	});


	socket.on("end", function(){
		console.log("Client Leave!!");
	});

	socket.on("error",function(err){
		console.log(err);
	});

});


server.listen(port);

console.log("server start in 52.69.176.156 port 1337");
