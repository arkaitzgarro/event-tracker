const host = process.env.PGHOST || 'localhost';
const port = process.env.PGPORT || 5432;
const user = process.env.PGUSER || 'postgres';
const pass = process.env.PGPASSWORD || 'postgres';
const db = process.env.PGDATABASE || 'events';

module.exports = {
  db: {
    uri: `postgres://${user}:${pass}@${host}:${port}/${db}`
  }
};