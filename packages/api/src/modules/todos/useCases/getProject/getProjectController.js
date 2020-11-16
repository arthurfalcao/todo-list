const getProjectUseCase = require('./getProject');

module.exports = async (req, res) => {
  const { id: userId } = req.user;
  const { id } = req.params;

  const project = await getProjectUseCase({ projectId: id, userId });

  return res.json(project);
};
