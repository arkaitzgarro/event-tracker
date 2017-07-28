module.exports = (routes = []) => {
  function match(path) {
    return routes.find((route) => route.path === path);
  }

  return {
    match
  };
};
