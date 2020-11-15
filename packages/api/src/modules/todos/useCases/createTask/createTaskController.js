const createTaskUseCase = require('./createTask');

module.exports = async (req, res) => {
  const { id } = req.user;
  const { projectId, description } = req.body;

  const task = await createTaskUseCase({ description, projectId, userId: id });
  return res.status(201).json(task);
};
