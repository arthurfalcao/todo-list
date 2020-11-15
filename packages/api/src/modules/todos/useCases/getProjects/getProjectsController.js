const getProjectsUseCase = require('./getProjects');

module.exports = async (req, res) => {
  const { id } = req.user;

  const projects = await getProjectsUseCase({ userId: id });
  return res.json(projects);
};
