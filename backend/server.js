require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoute.js');
const productRoute = require('./routes/productRoute.js');
const categoryRoute = require('./routes/categoryRoute.js');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

const connectDB = require('./db.js');
connectDB(); // connect to database

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'../build')))

//routes
app.use("/api/v1/auth",authRoutes); //api/v1/auth is just to follow naming conventions
app.use("/api/v1/category",categoryRoute);
app.use("/api/v1/product",productRoute);
app.use("*", function(req,res){
  res.sendFile(path.join(__dirname,"../build/index.html"));
})


//Initial (home) route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
