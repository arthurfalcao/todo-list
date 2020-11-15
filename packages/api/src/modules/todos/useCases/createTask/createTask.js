const AppError = require('../../../../errors/AppError');
const { projectRepo, taskRepo } = require('../../repos');

module.exports = async ({ userId, projectId, description }) => {
  const project = await projectRepo.findByIdAndUser({ id: projectId, userId });
  if (!project) {
    throw new AppError('Project not found', 404);
  }

  return taskRepo.save({ projectId, description });
};
