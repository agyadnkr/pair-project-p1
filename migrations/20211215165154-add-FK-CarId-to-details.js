'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Details', 'CarId', {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'Cars'
        },
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Details', 'CarId')
  }
};
