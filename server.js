const express = require('express');
const server = express();

server.set('view engine', 'pug');

server.get('/', function (req, res) {
  res.render('index');
});

server.listen(3000, () => console.log('Server listening on port 3000'));