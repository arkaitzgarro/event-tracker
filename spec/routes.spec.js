process.env.NODE_ENV = 'DEV';
const routes = require('../src/router/routes');

describe("Routes configuration", () => {
  it("should register / route", () => {
    const route = routes.match({ url: 'http://localhost/' });

    expect(route.path).toBe('/');
    expect(route.method).toBe('GET');
    expect(typeof route.controller).toBe('function');
  });
});