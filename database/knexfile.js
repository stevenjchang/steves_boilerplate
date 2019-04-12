module.exports = {
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
    pool: {
      "min": 2,
      "max": 10
    },
    migrations: {
      "tableName": "knex_migrations",
      "directory": "./migrations/"
    },
    seeds: {
      "directory": "./db/seeds"
    },
    debug: true
  },

  development: {
    client: 'postgresql',
    connection: {
      database: 'blog_dev'
    }
  }

}
