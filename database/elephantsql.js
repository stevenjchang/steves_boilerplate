var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native
require('dotenv').config();

var conString = process.env.ELEPHANT_SQL_URL;
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM "test"', function(err, result) {
  // client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log('result ==>', result.rows);
    // console.log('heyhey', result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});
