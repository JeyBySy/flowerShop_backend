// app.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { json, urlencoded } = require('express');

// Import routes
// const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');
// const errorHandler = require('./middleware/errorHandler');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(helmet());                // Secure HTTP headers
app.use(cors());                  // Enable CORS for all routes
app.use(morgan('dev'));           // Logging
app.use(json());                  // Parse JSON payloads
app.use(urlencoded({ extended: true })); // Parse URL-encoded payloads

// Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
app.use('/api/product', productRoutes);

app.get("/", (req, res) => {
    res.send({ status: "dasdasdasds" })
})

// Custom error handling middleware
// app.use(errorHandler);

module.exports = app;
