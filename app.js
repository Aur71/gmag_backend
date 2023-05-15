const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// routes
const promotionSlidesRoutes = require('./src/api/v1/routes/promotionSlides');
const authRoutes = require('./src/api/v1/routes/auth');
const productsRoutes = require('./src/api/v1/routes/products');
const reviewsRoutes = require('./src/api/v1/routes/reviews');
const questionsRoutes = require('./src/api/v1/routes/questions');
const favoritesRoutes = require('./src/api/v1/routes/favorites');
const cartRoutes = require('./src/api/v1/routes/cart');
const adminRoutes = require('./src/api/v1/routes/admin');

// db
const connectDB = require('./src/api/v1/db/connect');

// middleware
app.use(express.json());

app.use(
  cors({
    origin: ['http://localhost:3001', 'https://gmag.vercel.app/'],
  })
);

// routes
app.get('/', (req, res) => {
  res.send('gmag api');
});
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productsRoutes);
app.use('/api/v1/reviews', reviewsRoutes);
app.use('/api/v1/questions', questionsRoutes);
app.use('/api/v1/favorites', favoritesRoutes);
app.use('/api/v1/cart', cartRoutes);
app.use('/api/v1/promotion-slides', promotionSlidesRoutes);
app.use('/api/v1/admin', adminRoutes);

// database connection
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
