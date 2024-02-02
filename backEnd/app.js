const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const categoriesRouter = require("./routes/CategoriesRoutes");

mongoose.connect('mongodb://127.0.0.1:27017/clothShop')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(categoriesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
