
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('sample_users', function(table) {
      table.increments('id').primary();
      table.string('username');
      table.string('name');
      table.string('email');
      table.timestamps();
    }),
    knex.schema.createTable('sample_posts', function(table){
      table.increments('id').primary();
      table.string('title');
      table.string('body');
      table.integer('author_id')
            .references('uid')
            .inTable('users');
      table.dateTime('postDate');
    }),
    knex.schema.createTable('sample_comments', function(table){
        table.increments('id').primary();
        table.string('body');
        table.integer('author_id')
              .references('uid')
              .inTable('users');
        table.integer('post_id')
              .references('id')
              .inTable('posts');
        table.dateTime('postDate');
    }),
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('sample_users'),
    knex.schema.dropTable('sample_posts'),
    knex.schema.dropTable('sample_comments')
])
};
