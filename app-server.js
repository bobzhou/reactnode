var express = require('express');
var _ = require('underscore');
var app = express();

var connections = [];

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(8000);
var io = require('socket.io').listen(server);
var state = { 

};

io.sockets.on('connection', function(socket) {
	
	socket.once('disconnect', function(){

		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		console.log("Disconnected: %s, %d sockets remaining.", socket.id, connections.length);
	});

	//socket.emit('welcome', state);

	connections.push(socket);
	console.log("Connected: %s, %d sockets remaining.", socket.id, connections.length);
});

console.log("Polling server is running on 'http://localhost:8000'");