const bcrypt = require('bcrypt');

const { userRepo } = require('../../repos');
const { authService } = require('../../services');

module.exports = async ({ email, password }) => {
  const user = await userRepo.findByEmail(email);

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = authService.signJWT({ userId: user.id });
    return { name: user.name, token };
  }

  throw new Error('Email or password incorrect');
};
