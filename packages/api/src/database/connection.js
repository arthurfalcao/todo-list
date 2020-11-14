const Sequelize = require('sequelize');

const { database, dialect, host, password, username } = require('../configs/database');

module.exports = new Sequelize(database, username, password, {
  host,
  dialect,
});
