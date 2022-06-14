// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'html'});
//   res.end('<h1>hello world<h1>');
// }).listen(8080);
var http = require('http');
var dt = require('./date')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(3000);
myDateTime()