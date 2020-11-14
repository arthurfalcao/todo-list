const User = require('../models/User');
const connection = require('./connection');

User.init(connection);

module.exports = connection;
