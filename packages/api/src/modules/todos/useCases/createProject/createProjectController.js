const createProjectUseCase = require('./createProject');

module.exports = async (req, res) => {
  const { id } = req.user;
  const { name } = req.body;

  const project = await createProjectUseCase({ name, userId: id });

  return res.status(201).json(project);
};
