const User = require('../../../models/User');

module.exports = {
  findByEmail(email) {
    return User.findOne({ where: { email } });
  },

  save(user) {
    return User.create(user);
  },
};
