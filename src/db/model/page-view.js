module.exports = (sequelize, DataTypes) => {
  return sequelize.define("PageView", {
     pageId: {
       type: DataTypes.STRING,
       allowNull: false,
       unique: 'compositeIndex'
     },
     data: {
      type: DataTypes.JSON,
      allowNull: true
     }
  }, {
    freezeTableName: true,
    tableName: 'page_view'
  });
};