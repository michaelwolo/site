var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.listen(80, function () {
  console.log('Your site is served. Bon appetit.')
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});
