'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async  (queryInterface, Sequelize) => {
    await queryInterface.createTable("spaceships", {
     id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
     },
      name: {
       type: Sequelize.STRING,
       allowNull: false,
      },
      serial_number: {
       type: Sequelize.INTEGER,
       allowNull: false,
       unique: true,
      },
     capacity: {
       type: Sequelize.INTEGER,
       allowNull: false,
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
    await queryInterface.dropTable("spaceships");

  },
};
