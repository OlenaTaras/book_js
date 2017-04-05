var http = require('http');

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(request.url);
  response.end();
};


http.createServer(onRequest).listen(3000);

console.log('Server running on port 7000');
