var express = require('express');
var app = express();
var env = require('./config/env');

// logger config
var morgan = require('morgan');
app.use(morgan('combined'));

// Load routes
['index'].forEach(function(route){
  require('./config/routes/' + route)(app);
});

var server = app.listen(3000, function () {
  var host = env.ipaddr;
  var port = env.port;

  console.log('Example app listening at http://%s:%s', host, port);
});

