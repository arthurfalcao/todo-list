const AppError = require('../../../../errors/AppError');
const { projectRepo } = require('../../repos');

module.exports = async ({ userId, projectId }) => {
  const project = await projectRepo.findByIdAndUser({ id: projectId, userId });
  if (!project) {
    throw new AppError('Project not found', 404);
  }

  return project;
};
