var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.listen(8080, function () {
  console.log('Your site is served. Bon appetit.')
});

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

app.get('/error', function (req, res) {
  res.status(402).send('Insufficient funds');
});
