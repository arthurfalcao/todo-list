require('dotenv').config();

const cors = require('cors');
const express = require('express');
require('express-async-errors');

require('./database');
const AppError = require('./errors/AppError');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }

  console.error(err);
  return res.status(500).json({
    error: 'Internal server error',
  });
});

module.exports = app;
