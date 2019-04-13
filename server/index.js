const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./databaseInteractor/knex');
const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || '3000';
const app = express();

app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/db', db.selectTestTable);
app.get('/dba', function(req, res) {
  // res.sendFile(path.join(__dirname, '../public/index.html'), function(err, result) {
  //   console.log('err, res ==>', err, res);
  // })
});


app.listen(PORT, (err) => {
  if (err) { return console.log('Error occurred in server/index.js =>', err); }
  console.log(`Server is listening on PORT:${PORT}`);
});

module.exports = app;
