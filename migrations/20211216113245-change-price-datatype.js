'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Cars', 'price', {
      type: Sequelize.BIGINT
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Cars', 'price', {
      type: Sequelize.INTEGER
    })
  }
};
