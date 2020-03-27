//To create an http server we use require('http') and pass it to a variable name http.
//variable named http
const http = require('http');


//We defined hostname.
//use localHosti.e 127.0 .0 .1 and port number 3000
const hostname = '127.0.0.1';
//Define port number.
const port = 3000;

//Create a server using createServer() method.
const server = http.createServer(function(req, res) {
  //This created the server as well as a response having statusCode: 200.
  //ContentType header of plain text and and the string Hello World.
  //response that the server can send to browser
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//Assign a hostname and port number.
server.listen(port, hostname, function() {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});