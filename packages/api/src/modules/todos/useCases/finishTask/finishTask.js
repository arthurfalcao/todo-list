const { taskRepo } = require('../../repos');

module.exports = async ({ userId, taskId }) => {
  const task = await taskRepo.findByIdAndUser({ id: taskId, userId });
  // TODO: throw an error
  if (!task) {
    return null;
  }

  return task.update({ finishedAt: new Date().toISOString() });
};
