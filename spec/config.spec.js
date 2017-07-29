const conf = require('../src/config');

describe("Configuration", () => {
  it("it returns default configuration for host properties", () => {
    expect(conf.port).toBe(3000);
    expect(conf.hostName).toBe('http://localhost:3000');
    expect(conf.db.uri).toBe('postgres://postgres:postgres@127.0.0.1/events');
  });
});