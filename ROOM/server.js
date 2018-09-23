var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const rooms = {};
const broadcastRooms = () => io.emit('rooms', Object.keys(rooms));

const updateCode = (lang, data) => {
    const room = data.room.toLowerCase();
    rooms[room][lang] = data;
    io.emit(`${room}://mirror`, {[lang]: data.diff});
};

const createRoom = (room) => {
    room = room.toLowerCase();
    rooms[room] = {};
    broadcastRooms();
};

const destroyRoom = (room) => {
    room = room.toLowerCase();
    delete rooms[room];
    broadcastRooms();
};

io.on('connection', socket => {
    socket.on('js', data => updateCode('js', data));
    socket.on('css', data => updateCode('css', data));
    socket.on('html', data => updateCode('html', data));

    socket.on('create', data => createRoom(data.room));
    socket.on('destroy', data => destroyRoom(data.room));
});

app.use('/', express.static(path.join(__dirname, '/public/')));
app.get('/rooms/:id', (req, res) => {
    const room = rooms[req.params.id];
    res.json(room ? room : {});
});
app.get('/rooms', (req, res) => {
    res.json(Object.keys(rooms));
});

http.listen(4000, function () {
    console.log('listening on *:4000');
});