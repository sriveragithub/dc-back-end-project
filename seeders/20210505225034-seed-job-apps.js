'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
      name: 'Eric',
      email: 'eric@email.com',
      bio: 'This is a test bio.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
      name: 'Brandon',
      email: 'brandon@email.com',
      bio: 'This is a second test bio.',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      name: 'Skyler',
      email: 'skyler@email.com',
      bio: 'This is a third test bio.',
      createdAt: new Date(),
      updatedAt: new Date()
  }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
