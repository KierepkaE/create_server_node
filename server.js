const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("<h1>node</h1>");
  res.end();
}).listen(3000);