require('dotenv').config();

const express = require('express');
require('express-async-errors');

require('./database');

const app = express();

module.exports = app;
