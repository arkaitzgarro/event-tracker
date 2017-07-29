const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config');

const db = {};
const sequelize = new Sequelize(config.db.uri);

const models = [
  'model/page-view',
];

models.forEach((file) => {
  const model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
