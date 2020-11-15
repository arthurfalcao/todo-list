const { Op } = require('sequelize');
const Task = require('../../../models/Task');

module.exports = {
  findByIdAndUser({ id, userId }) {
    return Task.findOne({
      where: { id },
      include: { association: 'project', where: { userId } },
    });
  },

  save(task) {
    return Task.create(task);
  },

  remove({ id, userId }) {
    return Task.destroy({
      where: { id, finishedAt: { [Op.is]: null } },
      include: { association: 'project', where: { userId } },
    });
  },
};
