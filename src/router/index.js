const url = require('url');

const routes = [];
const methods = {
  get GET() {
    return 'GET';
  },
  get POST() {
    return 'POST';
  }
};

function extractPath(req) {
  return url.parse(req.url).pathname;
}

function match(req) {
  const path = extractPath(req);
  const route = routes.find((route) => route.path === path);

  if (!route) {
    return null;
  }

  if (route.methods && !route.methods.includes(req.method)) {
    return null;
  }

  return route;
}

function register(path, controller, method = methods.GET) {
  routes.push({
    path,
    controller,
    method
  });
}

function get(path, controller) {
  register(path, controller);
}

function post(path, controller) {
  register(path, controller, methods.POST);
}

module.exports = {
  get,
  match,
  post
};
