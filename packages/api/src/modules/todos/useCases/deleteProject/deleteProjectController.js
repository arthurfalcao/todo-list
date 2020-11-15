const deleteProjectUseCase = require('./deleteProject');

module.exports = async (req, res) => {
  const { id: userId } = req.user;
  const { id } = req.params;

  await deleteProjectUseCase({ projectId: id, userId });

  return res.status(204).json();
};
