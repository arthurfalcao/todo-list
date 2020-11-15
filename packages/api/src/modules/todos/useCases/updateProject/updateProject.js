const { projectRepo } = require('../../repos');

module.exports = async ({ userId, projectId, name }) => {
  const project = await projectRepo.findByIdAndUser({ id: projectId, userId });
  // TODO: throw an error
  if (!project) {
    return null;
  }

  return project.update({ name });
};
