const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const jobRoutes = require('./routes/jobs');
const productRoutes = require('./routes/products');
const transactionRoutes = require('./routes/transactions');

// app.use('/', (req, res) => {
//   res.send('This is the Backend API Testing Project');
// });

// Authentication routes
app.use('/api/v1/auth', authRoutes);

// Courses
app.use('/api/v1/courses', courseRoutes);

// Jobs
app.use('/api/v1/jobs', jobRoutes);

// Products
app.use('/api/v1/products', productRoutes);

// Transactions
app.use('/api/v1/transactions', transactionRoutes);

app.use('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app };
