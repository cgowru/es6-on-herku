'use strict';

var express = require('express');
var greeter = require('./greeter');
var app = express();

app.get('/', function (req, res) {
	res.send(greeter());
});

app.listen(process.env.PORT || 3000, function () {
	console.log('Server started at 3000');
});