const port = parseInt(process.env.PORT, 10) || 80;

const dbHost = process.env.DB_HOST;
const dbPort = parseInt(process.env.DB_PORT, 10);
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

module.exports = {
  port: port,
  hostName: process.env.HOST_NAME_PRD,
  db: {
    uri: `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
  }
};