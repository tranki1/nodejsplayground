const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>hello express</h1>');
  res.send({
    name: 'kim',
    like: ['food', 'drinks']
  });
});

app.get('/about', (req, res) => {
  res.send('about page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'page not found'
  });
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});
