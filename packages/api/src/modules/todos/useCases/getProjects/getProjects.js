const { projectRepo } = require('../../repos');

module.exports = ({ userId }) => {
  return projectRepo.findAllByUser(userId);
};
