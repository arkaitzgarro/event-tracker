const dbConfig = require('./db').development;

const port = parseInt(process.env.PORT, 10) || 3000;

module.exports = {
  port: port,
  hostName: `http://localhost:${port}`,
  db: {
    uri: `${dbConfig.dialect}://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}/${dbConfig.database}`
  }
};