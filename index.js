var express = require('express');
var socket  = require('socket.io');
var app = express();
var server = app.listen(3005,()=>{
    console.log('listening on port 3005');
});
app.use(express.static('htmlfolder'));

var sio = socket(server);
sio.on('connection', function(user){
    console.log('the user id:',user.id);
    user.on('chat', function(data){
        sio.emit('chat2', data);
    });
});