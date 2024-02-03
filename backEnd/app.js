const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser=require('cookie-parser')
const connection = require("./config/dbConnection");
const categoriesRouter = require("./routes/CategoriesRoutes");
const adminRouter = require("./routes/adminRoutes");
const loginSignup = require("./routes/loginSignupRoutes");
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT;

connection();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use(categoriesRouter);
app.use(adminRouter);
app.use(loginSignup);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
