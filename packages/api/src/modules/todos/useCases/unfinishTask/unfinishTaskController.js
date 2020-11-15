const unfinishTaskUseCase = require('./unfinishTask');

module.exports = async (req, res) => {
  const { id: userId } = req.user;
  const { id } = req.params;

  const task = await unfinishTaskUseCase({ taskId: id, userId });
  return res.json(task);
};
