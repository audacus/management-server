/* jshint node: true */
'use strict';
// constants
const PORT = process.env.PORT || 1337;
// setup application
// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
// app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// router
var router = express.Router();
// database
var database = mongoose.connect('mongoose://localhost/management');
// api
var usage = function(request, response) {
	// TODO: print usage of api
	response.send('Hello World!');
};
// print usage on all verbs
router.all('/', usage);
// register router to app
app.use('/api', router);
// server
var server = app.listen(PORT, function() {
	var address = server.address();
	console.log("server listening at http://%s:%s", address.address, address.port);
});
