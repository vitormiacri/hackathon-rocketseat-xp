'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.addColumn(
        'developers',
        'url_video',
         {
           type: Sequelize.STRING
         });

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('users');

  }
};
