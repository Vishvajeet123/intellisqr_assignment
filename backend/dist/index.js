"use strict";
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors'); //  Install: npm install cors
const dotenv = require('dotenv'); // Install: npm install dotenv
dotenv.config(); // Don't forget to call dotenv.config() to load environment variables
const app = express();
app.use(cors()); // Enable CORS (for development)
app.use(express.json()); //  Parse JSON bodies
app.use('/api/auth', authRoutes);
app.use(errorHandler); //  Use error handler
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
