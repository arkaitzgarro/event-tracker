const http = require('http');
const url = require('url');

const db = require('./db')();
const createRouter = require('./router');
const homeCtrl = require('./controller').home;

const routes = [
  {
    path: '/',
    controller: homeCtrl
  }
];

const router = createRouter(routes);

http.createServer((req, res) => {
  const route = router.match(url.parse(req.url).pathname);
  if (route === undefined) {
    res.writeHead(404);
    return res.end();
  }

  route.controller(req, res);
}).listen(3000);