const Project = require('../../../models/Project');

module.exports = {
  findByIdAndUser({ id, userId }) {
    return Project.findOne({ where: { id, userId } });
  },

  save(project) {
    return Project.create(project);
  },

  remove({ id, userId }) {
    return Project.destroy({ where: { id, userId } });
  },
};
