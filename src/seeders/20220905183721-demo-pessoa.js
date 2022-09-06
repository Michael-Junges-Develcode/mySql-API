"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          name: "Ana Brauer",
          active: false,
          email: "ana@email.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aurora Targaryen",
          active: false,
          email: "aurora@email.com",
          role: "professor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rodrigo Marcelino",
          active: false,
          email: "rodrigo@email.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pessoas", null, {});
  },
};
