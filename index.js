const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');


//User routes
app.use('/api/v1/users', userRoutes);

// Authentication routes
app.use('/api/v1/auth', authRoutes);

app.use('/', (req, res) => {
  res.send('This is the Backend API Project');
});

app.use('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app };
