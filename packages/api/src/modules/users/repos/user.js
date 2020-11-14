const User = require('../../../models/User');

module.exports = {
  save(user) {
    return User.create(user);
  },
};
