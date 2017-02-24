var request = require('request');
var bnsCC = require('../utilities/bnscc');

module.exports = function (app, config) {

  app.get('/partials/*', function (req, res) {
    res.render('../../public/app/' + req.params[0]);
  });

  app.get('/api/character/:characterName', bnsCC);

  app.all('/api/*', function (req, res) {
    res.send(404);
  });

  app.get('*', function (req, res) {
    res.render('index');
  });
};
