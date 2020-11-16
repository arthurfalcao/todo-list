module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      projectId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'projects',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      finishedAt: Sequelize.DATE,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('tasks');
  },
};
