const { Model, DataTypes } = require('sequelize');

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          type: DataTypes.UUID,
        },
        userId: {
          allowNull: false,
          type: DataTypes.UUID,
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        tableName: 'projects',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });

    this.hasMany(models.Task, {
      foreignKey: 'projectId',
      as: 'tasks',
    });
  }
}

module.exports = Project;
