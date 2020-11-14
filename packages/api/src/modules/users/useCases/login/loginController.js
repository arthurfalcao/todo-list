const loginUseCase = require('./login');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const user = await loginUseCase({ email, password });
  return res.json(user);
};
