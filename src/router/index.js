const url = require('url');

module.exports = (routes = []) => {
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

  return {
    match
  };
};
