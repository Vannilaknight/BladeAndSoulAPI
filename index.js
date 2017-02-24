var express = require('express');
var app = express();
var config = require('./server/config/config');

require('./server/config/express')(app, config);

require('./server/config/routes')(app, config);

app.listen(config.self.port);
console.log('Listening on port ' + config.self.port + '...');
