const express = require('express');

var app = express();

app.get('/', (req, res, err) => {
  res.status(404).send({
    error: 'page not found',
    name: 'todo'
  });
});

app.get('/users', (req, res, err) => {
  res.send([
    {
      name: 'Kim',
      age: 27
    },
    {
      name: 'Lilli',
      age: 1
    }
  ]);
});

app.listen(3000);

module.exports = app;
