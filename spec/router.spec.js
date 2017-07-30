const router = require('../src/router');

describe("Router module", () => {
  describe('get method',() => {
    let ctrl;
    beforeEach(() => {
      ctrl = jasmine.createSpy('controller');
    });

    it("should register a GET route", () => {
      router.get('/home', ctrl);
      const route = router.match({ url: 'http://localhost/home' });

      expect(route.path).toBe('/home');
      expect(route.method).toBe('GET');
      expect(route.controller).toBe(ctrl);
    });

    it("should register a POST route", () => {
      router.post('/event', ctrl);
      const route = router.match({ url: 'http://localhost/event' });

      expect(route.path).toBe('/event');
      expect(route.method).toBe('POST');
      expect(route.controller).toBe(ctrl);
    });

    it("should return null if route does not exist", () => {
      const route = router.match({ url: 'http://localhost/yolo' });

      expect(route).toBe(null);
    });
  });
});