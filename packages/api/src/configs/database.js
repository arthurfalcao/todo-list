module.exports = {
  dialect: 'postgres',
  host: process.env.DATABASE_HOST || '127.0.0.1',
  database: process.env.DATABASE_DB || 'postgres',
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || 'development',
};
