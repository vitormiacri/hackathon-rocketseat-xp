'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('developers',
        {
          id: {
           type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          biography: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          career: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          resume: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          user_id: {
            type: Sequelize.INTEGER,
            references: { model: 'users', key: 'id'},
            allowNull: false,
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at:{
            type: Sequelize.DATE,
            allowNull: false,
          }
     });

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('devoloper');

  }
};
