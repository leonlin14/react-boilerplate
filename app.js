var koa = require('koa');
var path = require('path');
var serve = require('koa-static');
var Router = require('koa-router');
var views = require('koa-views');

// Loading settings
var settings = require('./lib/config.js');
if (!settings) {
	console.error('Failed to load settings');
	process.exit(1);
}

var app = koa();

// Static file path
app.use(serve(path.join(__dirname, 'public')));

// Create render
app.use(views(__dirname + '/views', {
    extension: 'pug',
    map: {
        html: 'pug'
    }
}));

var router = new Router();

router.get('/', function *() {
    yield this.render('test');
});

app.use(router.middleware());

// Start the server
app.listen(settings.general.server.port, function() {
	console.log('server is running at port', settings.general.server.port);
});