'use strict';
const fs = require('fs');
let data = JSON.parse(fs.readFileSync('./data/details.json', 'utf8'))

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     data.forEach(e => {
      e.createdAt = new Date(),
      e.updatedAt = new Date()
    });

    return queryInterface.bulkInsert('Details', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Details', null, {});
  }
};
