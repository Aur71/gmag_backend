const express = require('express');
const app = express();
const cors = require('cors');
const auth = require('./api/v1/routes/auth');
const promotionSlider = require('./api/v1/routes/promotionSlider');
const products = require('./api/v1/routes/products');
const cart = require('./api/v1/routes/cart');
const admin = require('./api/v1/routes/admin');
const connectDB = require('./api/v1/db/connect');
require('dotenv').config();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3001',
  })
);

// routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/products', products);
app.use('/api/v1/cart', cart);
app.use('/api/v1/admin', admin);
app.use('./api/v1/promotion-slider', promotionSlider);

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
