require('dotenv').config();

const express = require('express');
require('express-async-errors');

require('./database');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

module.exports = app;
