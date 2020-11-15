const Project = require('../../../models/Project');

module.exports = {
  save(project) {
    return Project.create(project);
  },
};
