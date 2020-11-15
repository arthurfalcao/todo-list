module.exports = {
  secret: process.env.AUTH_SECRET || 'teste',
  options: {
    expiresIn: '3600h',
  },
};
