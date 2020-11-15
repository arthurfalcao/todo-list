const { taskRepo } = require('../../repos');

module.exports = ({ userId, taskId }) => {
  return taskRepo.remove({ id: taskId, userId });
};
