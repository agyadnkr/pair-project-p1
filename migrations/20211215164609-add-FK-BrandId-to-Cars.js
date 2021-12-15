'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Cars', 'BrandId', {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'Brands'
        },
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Cars', 'BrandId')
  }
};
