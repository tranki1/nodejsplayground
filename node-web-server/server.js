const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}:${req.method} ${req.url}`;
  console.log(log);
  fs.appendFileSync('server.log', log + '\n');

  //needed for the app to process
  next();
});

//maintainance mode
// app.use((req, res, next) => {
//   res.render('maintainance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', text => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  // res.send('<h1>hello express</h1>');
  // res.send({
  //   name: 'kim',
  //   like: ['food', 'drinks']
  // });
  res.render('home.hbs', {
    pageTitle: 'Home',
    name: 'kim'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'about'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'page not found'
  });
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});
