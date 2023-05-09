'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("capSpace", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      capsId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "caps", key:"id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
       },
       spaceshipsId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "spaceships", key:"id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
       },
       createdAt: {
        type: Sequelize.DATE,
      },
  
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async  (queryInterface, Sequelize) => {
    await queryInterface.dropTable("capSpace");

  },
};
