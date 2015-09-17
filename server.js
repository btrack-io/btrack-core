var express = require('express');
var app = express();
var env = require('./config/env');
var bodyParser = require("body-parser");

// logger config
var morgan = require('morgan');
app.use(morgan('combined'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Load routes
['index'].forEach(function(route){
  require('./config/routes/' + route)(app);
});

var server = app.listen(3000, function () {
  var host = env.ipaddr;
  var port = env.port;

  console.log('Example app listening at http://%s:%s', host, port);
});

