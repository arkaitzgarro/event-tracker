const Sequelize = require('sequelize');

module.exports = (db) => {
  return db.define("page_views", {
     pageId: {
       type: Sequelize.STRING,
       allowNull: false,
       unique: 'compositeIndex'
     },
     data: {
      type: Sequelize.JSON,
      allowNull: true
     }
  });
};