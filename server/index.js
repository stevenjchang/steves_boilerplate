const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');

const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || '3000';

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, (err) => {
  if (err) { return console.log('Error occurred in server/index.js =>', err); }
  console.log(`Server is listening on PORT:${PORT}`);
});

module.exports = app;
