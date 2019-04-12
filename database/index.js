require('dotenv').config();
const config = require('./config/knexfile');
const env = process.env.NODE_ENV || 'development';
const knex = require('knex')(config[env]);

module.exports = knex;

// knex.migrate.latest([config]);
