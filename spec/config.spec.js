describe("Configuration", () => {
  describe('development environment',() => {
    let conf;
    beforeEach(() => {
      process.env.NODE_ENV = 'DEV';
      conf = require('../src/config');
    });

    it("should returns default configuration for host properties", () => {
      expect(conf.port).toBe(3000);
      expect(conf.hostName).toBe('http://localhost:3000');
    });

    it("should returns default configuration for DB connection", () => {
      expect(conf.db.uri).toBe('postgres://postgres:postgres@127.0.0.1/events');
    });
  });
});