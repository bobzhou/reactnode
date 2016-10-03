var express = require('express');
var _ = require('underscore');
var uuid = require('uuid');
var app = express();

var connections = [];

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(8000);
var io = require('socket.io').listen(server);
var state = { 
	rooms: []
};

io.sockets.on('connection', function(socket) {
	
	socket.once('disconnect', function(){

		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		console.log("Disconnected: %s, %d sockets remaining.", socket.id, connections.length);
	});

	socket.emit('updateState', state);

	socket.on('createRoom', function(payload) {
		var room = {
			id: uuid.v1(),
			name: payload.name,
			creator: socket.id
		}
		state.rooms.push(room);
		io.sockets.emit('updateState', state);
	})

	connections.push(socket);
	console.log("Connected: %s, %d sockets remaining.", socket.id, connections.length);
});

console.log("Polling server is running on 'http://localhost:8000'");