const deleteTaskUseCase = require('./deleteTask');

module.exports = async (req, res) => {
  const { id: userId } = req.user;
  const { id } = req.params;

  await deleteTaskUseCase({ taskId: id, userId });
  return res.status(204).json();
};
