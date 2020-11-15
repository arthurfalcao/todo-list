const { projectRepo } = require('../../repos');

module.exports = ({ userId, name }) => {
  return projectRepo.save({ userId, name });
};
