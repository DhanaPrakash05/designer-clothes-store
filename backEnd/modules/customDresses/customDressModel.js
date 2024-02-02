const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
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


const Men = mongoose.model('Men', imageSchema);
const Women = mongoose.model('Women', imageSchema);
const Kids = mongoose.model('Kids', imageSchema);

module.exports = {Men,Women,Kids};

