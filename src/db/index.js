module.exports = () => {
  const Sequelize = require('sequelize');
  const config = require('../config');

  const sequelize = new Sequelize(config.db.uri);

  sequelize
    .authenticate()
    .then(() => console.log('Connection with DB has been established successfully.'))
    .catch((err) => console.error('Unable to connect to the database:', err));

  return {};
};