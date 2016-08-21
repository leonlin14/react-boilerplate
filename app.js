var koa = require('koa');
var path = require('path');
var serve = require('koa-static');
var Router = require('koa-router');
var views = require('koa-views');
var logger = require('koa-logger');
var locale = require('koa-locale');

// Loading settings
var settings = require('./lib/config.js');
if (!settings) {
	console.error('Failed to load settings');
	process.exit(1);
}

var app = koa();

// Static file path
app.use(serve(path.join(__dirname, 'public')));

// Show server logger
app.use(logger());

// Setup default locale
locale(app, 'en-US');

// Create render
app.use(views(__dirname + '/views', {
    extension: 'pug',
    map: {
        html: 'pug'
    }
}));

var router = new Router();

// Routes
app.use(require('./routes/views').middleware());

app.use(router.middleware());

// Start the server
app.listen(settings.general.server.port, function() {
	console.log('server is running at port', settings.general.server.port);
});