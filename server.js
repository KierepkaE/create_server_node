const http = require('http');
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  console.log(req.url)
  console.log(req.method)

  if (req.url === '/') {

    res.end(`
    <h1>Main</h1>
    <h2>Path:  ${req.url}</h2>`);
  } else if (req.url === '/users') {

    res.end(`
    <h1>Users</h1>
    <h2>Path:  ${req.url}</h2>`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(`
    <h2>Upss. This adress ${req.url} is not correct.</h2>`);

  }
}).listen(port, '127.0.0.1', () => {
  console.log('Listening on ... ' + port);
});