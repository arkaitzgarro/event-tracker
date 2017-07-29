module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable('page_view', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      pageId: {
        type: DataTypes.STRING
      },
      data: {
        type: DataTypes.JSON
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('page_view');
  }
};