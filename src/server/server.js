const express = require('express');
const fs = require('fs');
const { MongoClient, ObjectID } = require('mongodb');

const port = process.env.PORT || 4200;
const urlDB = 'mongodb://localhost:27017';
const app = express();

//SETTING CORS
const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  next();
}
app.use(allowCrossDomain);

//SETTING LOGS
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

//CONNECTING TO MONGODB
let users = [];
MongoClient.connect(urlDB, (err, client) => {
  if (err) {
    return console.log('Unable to connect to DB server.');
  }
  console.log('Connected to DB server.');
  const db = client.db('iDB');

  db.collection('Inventory').find({ isSingle: false }).toArray().then((docs) => {
    console.log(docs);
    users = docs;
  }, (err) => {
    console.log('Unable to fetch Inventory', err)
  });

  client.close();
});

//SETTING APIs
app.get('/', (req, res) => {
  res.send({
    welText: 'Welcome User'
  })
});
app.get('/users', (req, res) => {
  res.send({
    users
  })
});

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});
