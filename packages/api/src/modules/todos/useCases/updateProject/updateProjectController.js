const updateProjectUseCase = require('./updateProject');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const { name } = req.body;

  const project = await updateProjectUseCase({ name, projectId: id, userId });

  return res.json(project);
};
