const http = require('http');

const db = require('./db');
const createRouter = require('./router');
const homeCtrl = require('./controller').home;
const pageViewCtrl = require('./controller').pageView;

const routes = [
  {
    path: '/',
    methods: ['GET'],
    controller: homeCtrl
  },
  {
    path: '/page-view',
    methods: ['POST'],
    controller: pageViewCtrl
  }
];

const router = createRouter(routes);

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