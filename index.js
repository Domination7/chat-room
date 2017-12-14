
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var express = require('express');

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(8080, function(){
  console.log('Listening on port 8080')
  console.log('Type localhost:8080 to join server')
});
