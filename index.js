var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var socketio = require('socket.io');
var socket = require('./socket');

var app = express();
var server = app.listen(8080, function () {
  console.log('Your site is served. Bon appetit.')
});
var io = socketio(server);

socket(io);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.get('/data', function (req, res) {
  res.send({
    data: 'some data'
  });
});

app.get('/list', function (req, res) {
  res.send({
    list: ['one', 'two', 'three', 'four', 'five']
  });
});

app.get('/error', function (req, res) {
  res.status(402).send('Insufficient funds');
});

app.get('/failure', function (req, res) {
  res.status(500).send('Server is done');
});
