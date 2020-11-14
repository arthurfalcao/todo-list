const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          type: DataTypes.UUID,
        },
        email: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        password: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        tableName: 'users',
      }
    );
  }
}

module.exports = User;
