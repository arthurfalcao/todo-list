const finishTaskUseCase = require('./finishTask');

module.exports = async (req, res) => {
  const { id: userId } = req.user;
  const { id } = req.params;

  const task = await finishTaskUseCase({ taskId: id, userId });
  return res.json(task);
};
