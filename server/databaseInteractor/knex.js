const knex = require('../../database/index');

const selectTestTable = () => {
  knex.select().from('test')
  .then((result) => {
    // console.log('knex result ==>', result);
  })
}

module.exports = {
  selectTestTable
};
