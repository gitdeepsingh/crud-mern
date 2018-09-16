const expect = require('expect');
const request = require('supertest');
const { app } = require('../server');
const { Product } = require('../models/product');

const products = [
  {
    "code": 1,
    "prodName": "Custody",
    "stockCount": 11,
  },
  {
    "code": 4,
    "prodName": "Woozoo",
    "stockCount": 33,
  },
]

beforeEach((done) => {
  Product.remove({}).then(() => {
    return Product.insertMany(products);
  })
    .then(() => done());
});

describe('POST /inventory', () => {
  it('should post product details', (done) => {
    const obj = {
      code: 4,
      prodName: "Custody",
      stockCount: 35
    }

    request(app)
      .post('/inventory')
      .send(obj)
      .expect(200)
      .expect((res) => {
        expect(res.body.code).toBe(obj.code)
        expect(res.body.prodName).toBe(obj.prodName)
        expect(res.body.stockCount).toBe(obj.stockCount)
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Product.find(obj[0]).then((prod) => {
          expect(prod.length).toBe(3);
          done();
        }).catch((e) => done(e));
      })
  });

  it('should not allow posting invalid data', (done) => {

    request(app)
      .post('/inventory')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Product.find().then((prod) => {
          expect(prod.length).toBe(2);
          done();
        }).catch((e) => done(e));
      })
  })
});

describe('GET /inventory', () => {
  it('should get all products from the inventory', (done) => {
    request(app)
      .get('/inventory')
      .expect(200)
      .expect((res) => {
        expect(res.body.products.length).toBe(2);
      })
    .end(done)
  });
});