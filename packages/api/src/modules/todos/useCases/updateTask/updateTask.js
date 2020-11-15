const { taskRepo } = require('../../repos');

module.exports = async ({ userId, taskId, description }) => {
  const task = await taskRepo.findByIdAndUser({ id: taskId, userId });
  // TODO: throw an error
  if (!task) {
    return null;
  }

  return task.update({ description });
};
