var express = require('express');
var routes = require('./routes');
var logger = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');

var server = http.createServer();
var app = express();

server.on('request', app);

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, './node_modules')));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './browser')));

app.use(logger('dev'));

app.get('/*', function(req, res, next){
  res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(app.get('port'), function () {
  console.log('listening on port', app.get('port'));
});