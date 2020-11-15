const jwt = require('jsonwebtoken');

const authConfig = require('../../../configs/auth');

module.exports = {
  signJWT({ userId }) {
    const payload = { userId };
    return jwt.sign(payload, authConfig.secret, authConfig.options);
  },
};
