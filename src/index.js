const http = require('http');

const config = require('./config');
const db = require('./db');
const router = require('./router/routes');

http.createServer((req, res) => {
  const route = router.match(req);
  if (route === null) {
    res.writeHead(404);
    return res.end();
  }

  route.controller(req, res);
}).listen(config.port);

console.log('Local server listening at: ' + config.hostName);