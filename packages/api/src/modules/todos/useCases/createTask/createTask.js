const { projectRepo, taskRepo } = require('../../repos');

module.exports = async ({ userId, projectId, description }) => {
  const project = await projectRepo.findByIdAndUser({ id: projectId, userId });
  // TODO: throw an error
  if (!project) {
    return null;
  }

  return taskRepo.save({ projectId, description });
};
