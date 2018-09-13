const express = require('express');
const fs = require('fs');

const port = process.env.PORT || 4200;
const app = express();
const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  next();
}
app.use(allowCrossDomain);
app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now} ${req.method} ${req.url}`;
  fs.appendFileSync('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log.');
    }
  })
  next();
});

app.get('/', (req, res) => {
  res.send({
    "welcomeText": 'Hey there! Welcome to the website.'
  })
});
app.get('/users', (req, res) => {
  res.send({
    0: ['deep', 'katal'],
    1: ['sidhu', 'sharma']
  })
});

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});
