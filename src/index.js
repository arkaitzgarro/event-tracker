const http = require('http');

const db = require('./db');
const router = require('./config/routes');

const createServer = (model) => {
  http.createServer((req, res) => {
    const route = router.match(req);
    if (route === null) {
      res.writeHead(404);
      return res.end();
    }

    route.controller(req, res, model);
  }).listen(3000);
};

db().then(createServer).then(() => {
  console.log('Local server listening at http://localhost:3000/');
});