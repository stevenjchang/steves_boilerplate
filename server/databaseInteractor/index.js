const client = require('../../database/index');

const selectTestTable = () => {
  client.connect((err) => {
    if (err) return console.error('could not connect to postgres', err);

    client.query(`SELECT * from "test"`, (err, result) => {
      if (err) return console.error('error running query', err);

      console.log('query result ==>', result.rows);

      client.end();
    });
  })
};

module.exports = {
  selectTestTable,
}
