const { Model, DataTypes } = require('sequelize');

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          type: DataTypes.UUID,
        },
        projectId: {
          allowNull: false,
          type: DataTypes.UUID,
        },
        description: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        finishedAt: DataTypes.DATE,
      },
      {
        sequelize,
        tableName: 'tasks',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Project, {
      foreignKey: 'projectId',
      as: 'project',
      onUpdate: 'cascade',
      onDelete: 'cascade',
    });
  }
}

module.exports = Task;
