require('dotenv').config();

module.exports = {

  production: {
    client: 'postgresql',
    connection: process.env.ELEPHANT_SQL_URL,
    pool: {
      "min": 2,
      "max": 10
    },
    migrations: {
      "tableName": "knex_migrations",
      "directory": "./migrations/"
    },
    debug: true
  },

  development: {
    client: 'postgresql',
    connection: process.env.ELEPHANT_SQL_URL,
    pool: {
      "min": 2,
      "max": 10
    },
    migrations: {
      "tableName": "knex_migrations",
      "directory": "./migrations/"
    },
    debug: true
  }

}
