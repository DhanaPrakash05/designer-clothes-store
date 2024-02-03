const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  dressType: {
    type:String,
    required: true,
  },
  description: String,
  
});


const Men = mongoose.model('Men', schema);
const Women = mongoose.model('Women', schema);
const Kids = mongoose.model('Kids', schema);

module.exports = {Men,Women,Kids};

