const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
  code: {
    type: Number,
    required: true,
    min: 1,
    max: 4
  },
  prodName: {
    type: String,
    required: true,
    trim: 1
  },
  stockCount: {
    type: Number,
    required: true,
    min: 0
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  expiryDate: {
    type: Number,
    default: new Date().getMilliseconds()
  }
});

module.exports = { Product };