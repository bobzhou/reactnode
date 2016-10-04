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
	rooms: [
		{
			id: 'adsf',
			name: 'test room',
			creator: 123,
		}
	]
};

var rooms = [
	{
		id: 'adsf',
		name: 'test room',
		creator: 123,
		members:[]
	}
];

io.sockets.on('connection', function(socket) {
	
	socket.once('disconnect', function(){

		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		console.log("Disconnected: %s, %d sockets remaining.", socket.id, connections.length);
	});

	socket.emit('updateState', state);

	socket.on('createRoom', function(payload) {
		roomId = uuid.v1().substring(0, 8);
		var roomName = {
			id: roomId,
			name: payload.name
		}
		state.rooms.push(roomName);
		io.sockets.emit('updateState', state);

		var room = {
			id: roomId,
			name: payload.name,
			creator: socket.id,
			members: []
		}
		rooms.push(room);
	});

	socket.on('joinRoom', function(payload){
		var roomId = payload.roomId;
		var room = _.findWhere(rooms, {id: roomId});
		if (room) {
			room.members.push(socket.id)
			socket.emit('updateState', {room: room});
		}
	});

	connections.push(socket);
	console.log("Connected: %s, %d sockets remaining.", socket.id, connections.length);
});

console.log("Polling server is running on 'http://localhost:8000'");