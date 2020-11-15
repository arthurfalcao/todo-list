const jwt = require('jsonwebtoken');

const authConfig = require('../../../configs/auth');

module.exports = {
  signJWT({ userId }) {
    const payload = { id: userId };
    return jwt.sign(payload, authConfig.secret, authConfig.options);
  },

  decodeJWT(token) {
    return new Promise((resolve) => {
      jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return resolve(null);
        return resolve(decoded);
      });
    });
  },
};
