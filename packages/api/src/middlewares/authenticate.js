const { authService } = require('../modules/users/services');

const authenticate = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error('Nenhum token de acesso fornecido');
    }

    const token = req.headers.authorization.slice(7);

    const decoded = await authService.decodeJWT(token);
    const signatureFailed = !!decoded === false;

    if (signatureFailed) {
      throw new Error('A assinatura do token expirou');
    }

    req.user = decoded;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authenticate;
