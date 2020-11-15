const Task = require('../../../models/Task');

module.exports = {
  save(task) {
    return Task.create(task);
  },
};
