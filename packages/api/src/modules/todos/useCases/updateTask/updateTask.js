const AppError = require('../../../../errors/AppError');
const { taskRepo } = require('../../repos');

module.exports = async ({ userId, taskId, description }) => {
  const task = await taskRepo.findByIdAndUser({ id: taskId, userId });
  if (!task) {
    throw new AppError('Task not found', 404);
  }

  return task.update({ description });
};
