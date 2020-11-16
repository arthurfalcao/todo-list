const getTaskUseCase = require('./getTask');

module.exports = async (req, res) => {
  const { id: userId } = req.user;
  const { id } = req.params;

  const project = await getTaskUseCase({ taskId: id, userId });

  return res.json(project);
};
