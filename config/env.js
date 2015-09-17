/**
  * This file is the configuration file ro all envs;
  * */

var path = require('path');

var _env = process.env.NODE_ENV || 'dev',
    _ipaddr = process.env.NODE_IP || '127.0.0.1',
    _port = process.env.NODE_PORT || 3000;


var root_dir = path.join(__dirname, '..'),
  app_dir = path.join(root_dir, 'app');

module.exports = {
  env: _env,
  port: _port,
  ipaddr: _ipaddr,
  controllersPath: path.join(app_dir, 'controllers'),
};

