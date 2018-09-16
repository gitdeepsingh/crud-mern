const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user');
const { Product } = require('./models/product');

const port = process.env.PORT || 4200;
const app = express();

//SETTING CORS
const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.post('/inventory', (req, res) => {
  const product = new Product({
    code: req.body.code,
    prodName: req.body.prodName,
    stockCount: req.body.stockCount
  })

  product.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/inventory', (req, res) => {
  Product.find().then((products) => {
    res.send({ products })
  }, (err) => {
    res.status(400).send(err)
  });
});

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});

module.exports = { app };