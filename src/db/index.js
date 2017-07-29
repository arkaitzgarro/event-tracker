const Sequelize = require('sequelize');
const config = require('../config');

// Import DB models

module.exports = () => {
  const sequelize = new Sequelize(config.db.uri);

  sequelize
    .authenticate()
    .then(() => console.log('Connection with DB has been established successfully.'))
    .catch((err) => console.error('Unable to connect to the database:', err));

  const pageView = require('./model/page-view')(sequelize);

  // Create DB tables
  // {force: true} will drop the table if it already exists
  return Promise.all([
    pageView.sync({force: true})
  ]).then(() => ({
    pageView
  }));
};