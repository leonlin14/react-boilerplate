var koa = require('koa');
var app = koa();

// Loading settings
var settings = require('./lib/config.js');
if (!settings) {
	console.error('Failed to load settings');
	process.exit(1);
}


app.use(function *(){
  this.body = 'Hello World';
});

// Start the server
app.listen(settings.general.server.port, function() {
	console.log('server is running at port', settings.general.server.port);
});