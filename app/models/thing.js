/* jshint node: true */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection('mongoose://localhost/management');
autoIncrement.initialize(connection);

var thingSchema = new Schema({
	name: String
});

thingSchema.plugin(autoIncrement.plugin, 'Thing');
module.exports = connection.model('Thing', thingSchema);
