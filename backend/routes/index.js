'use strict';

var express = require('express'),
    controllers = require('../controllers');

var app = express.Router();

app.use('/api', require('./api'));

app.get('*', controllers.Home.index);

module.exports = app;
