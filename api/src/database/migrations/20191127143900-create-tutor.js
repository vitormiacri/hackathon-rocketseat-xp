'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('tutors', {
         id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncremente: true,
          allowNull: false,
         },
         student_id: {
           type: Sequelize.INTEGER,
           allowNull: true,
           references: { model: 'users', key: 'id' }
         },
         developer_id: {
           type: Sequelize.INTEGER,
           allowNull: false,
           references: { model: 'users', key: 'id'}
         },
         created_at: {
           type: Sequelize.DATE,
           allowNull: false
         },
         updated_at: {
           type: Sequelize.DATE,
           allowNull: false
         }
        });

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('tutors');

  }
};
