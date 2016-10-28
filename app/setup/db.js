/* jshint node: true */
'use strict';
var sqlite = require('sqlite3').verbose();
var db = new sqlite.Database(':memory:');
