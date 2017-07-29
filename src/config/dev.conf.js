const port = parseInt(process.env.PORT, 10) || 3000;

const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = parseInt(process.env.PGPORT, 10) || 5432;
const dbUser = process.env.DB_USER || 'postgres';
const dbPass = process.env.DB_PASSWORD || 'postgres';
const dbName = process.env.DB_NAME || 'events';

module.exports = {
  port: port,
  hostName: `http://localhost:${port}`,
  db: {
    uri: `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
  }
};