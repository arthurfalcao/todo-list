const createUserUseCase = require('./createUser');

module.exports = async (req, res) => {
  const { email, password, name } = req.body;

  const user = await createUserUseCase({ email, name, password });
  return res.status(201).json(user);
};
