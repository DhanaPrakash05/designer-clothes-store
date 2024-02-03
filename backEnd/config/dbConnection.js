const mongoose = require('mongoose');
const connection=()=>mongoose.connect('mongodb://127.0.0.1:27017/clothShop')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
module.exports=connection;