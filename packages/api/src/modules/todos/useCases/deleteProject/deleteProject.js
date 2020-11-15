const { projectRepo } = require('../../repos');

module.exports = async ({ userId, projectId }) => {
  return projectRepo.remove({ id: projectId, userId });
};
