var koa = require('koa');
var path = require('path');
var serve = require('koa-static');

// Loading settings
var settings = require('./lib/config.js');
if (!settings) {
	console.error('Failed to load settings');
	process.exit(1);
}

var app = koa();

// Static file path
app.use(serve(path.join(__dirname, 'public')));

app.use(function *(){
  this.body = 'Hello World';
});

// Start the server
app.listen(settings.general.server.port, function() {
	console.log('server is running at port', settings.general.server.port);
});