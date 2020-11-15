const AppError = require('../../../../errors/AppError');
const { taskRepo } = require('../../repos');

module.exports = async ({ userId, taskId }) => {
  const task = await taskRepo.findByIdAndUser({ id: taskId, userId });
  if (!task) {
    throw new AppError('Task not found', 404);
  }

  if (task.finishedAt) {
    throw new AppError('Task already finished', 422);
  }

  return task.update({ finishedAt: new Date().toISOString() });
};
