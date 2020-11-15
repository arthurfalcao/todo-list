const bcrypt = require('bcrypt');

const { userRepo } = require('../../repos');
const { authService } = require('../../services');

module.exports = async ({ email, password, name }) => {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = await userRepo.save({
    email,
    password: passwordHash,
    name,
  });

  const token = authService.signJWT({ userId: user.id });

  return { name: user.name, token };
};
