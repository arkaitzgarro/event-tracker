const host = process.env.PGHOST;
const port = process.env.PGPORT;
const user = process.env.PGUSER;
const pass = process.env.PGPASSWORD;
const db = process.env.PGDATABASE;

module.exports = {
  db: {
    uri: `postgres://${user}:${pass}@${host}:${port}/${db}`
  }
};