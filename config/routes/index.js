var index = require('../../app/controllers/index');

module.exports = function(app){
  app.get('/', index.index);
  app.get('/test1', index.test1);
};

