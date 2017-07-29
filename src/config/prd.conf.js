const dbConfig = require('./db').production;

const port = parseInt(process.env.PORT, 10) || 80;

module.exports = {
  port,
  hostName: process.env.HOST_NAME_PRD,
  db: {
    uri: `${dbConfig.dialect}://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}/${dbConfig.database}`,
  },
};
