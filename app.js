var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Hello World';
});

var port = 3001;

// Start the server
app.listen(port, function() {
	console.log('server is running at port', port);
});