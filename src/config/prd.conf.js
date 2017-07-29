const port = parseInt(process.env.PORT, 10) || 80;

const dbHost = process.env.PGHOST;
const dbPort = parseInt(process.env.PGPORT, 10);
const dbUser = process.env.PGUSER;
const dbPass = process.env.PGPASSWORD;
const dbName = process.env.PGDATABASE;

module.exports = {
  port: port,
  hostName: process.env.HOST_NAME_PRD,
  db: {
    uri: `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
  }
};