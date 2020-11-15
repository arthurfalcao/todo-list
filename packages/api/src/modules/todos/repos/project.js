const Project = require('../../../models/Project');

module.exports = {
  findAllByUser(userId) {
    return Project.findAll({ where: { userId }, include: { association: 'tasks' } });
  },

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
