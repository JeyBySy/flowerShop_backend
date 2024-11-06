// server.js
require('dotenv').config(); // Load environment variables from .env file
const app = require('./app'); // Import the app instance
// const config = require('./config/config'); // Optional: config file with app settings
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000; // Set the port (default to 3000 if not set)

// Start the server
const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log("Database connected")
    } catch (error) {
        console.log("Database connection problem: ", error)
        process.exit(1)
    }
}

(async () => {
    await connectDB()
    // Start the server
    app.listen(PORT, (req, res) => {
        console.log(`http://localhost:${PORT}`)
    })
})()
