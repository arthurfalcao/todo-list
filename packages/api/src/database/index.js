const Project = require('../models/Project');
const Task = require('../models/Task');
const User = require('../models/User');
const connection = require('./connection');

Project.init(connection);
Task.init(connection);
User.init(connection);

Project.associate(connection.models);
Task.associate(connection.models);
User.associate(connection.models);

module.exports = connection;
