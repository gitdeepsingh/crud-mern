const express = require('express');

const port = process.env.PORT || 4200;
const app = express();
const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  next();
}
app.use(allowCrossDomain);

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
