const expect = require('expect');
const request = require('supertest');
const { app } = require('../server');
const { Product } = require('../models/product');

beforeEach((done) => {
  Product.remove({}).then(() => done());
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

        Product.find().then((prod) => {
          expect(prod.length).toBe(1);
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
          expect(prod.length).toBe(0);
          done();
        }).catch((e) => done(e));
      })
  })
})