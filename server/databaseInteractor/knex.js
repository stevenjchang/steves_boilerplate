const knex = require('../../database/index');

const selectTestTable = () => {
  knex.select().from('test')
  .then((result) => {
    // console.log('knex result ==>', result);
  })
}

const getPosts = (req, res) => {
  knex.select().from('sample_posts')
  .then((result) => {
    console.log('result ==>', result);
    res.status(200).send(result);
  })
}

module.exports = {
  selectTestTable,
  getPosts,
};
