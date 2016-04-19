var express = require('express');
var routes = require('./routes');
var logger = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');

var server = http.createServer();
var app = express();

server.on('request', app);


app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(3000, function () {
  console.log('listening on port 3000');
})