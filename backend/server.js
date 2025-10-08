require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { testConnection } = require('./config/mysql');

const app = express();

// Connect to database
testConnection();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Test route
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend działa z MariaDB!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
