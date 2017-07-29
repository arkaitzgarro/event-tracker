const port = parseInt(process.env.PORT, 10) || 3000;

const dbHost = process.env.PGHOST || 'localhost';
const dbPort = parseInt(process.env.PGPORT, 10) || 5432;
const dbUser = process.env.PGUSER || 'postgres';
const dbPass = process.env.PGPASSWORD || 'postgres';
const dbName = process.env.PGDATABASE || 'events';

module.exports = {
  port: port,
  hostName: `http://localhost:${port}`,
  db: {
    uri: `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
  }
};