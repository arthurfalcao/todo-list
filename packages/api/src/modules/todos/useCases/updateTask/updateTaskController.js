const updateTaskUseCase = require('./updateTask');

module.exports = async (req, res) => {
  const { id: userId } = req.user;
  const { id } = req.params;
  const { description } = req.body;

  const task = await updateTaskUseCase({ description, taskId: id, userId });
  return res.json(task);
};
