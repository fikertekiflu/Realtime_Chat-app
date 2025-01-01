const express = require('express');
const connectMongo = require('./config/db');
const redis = require('./config/redis');
const User = require('./models/User');  // Import the User model
const Message = require('./models/message');  // Import the Message model


const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectMongo();

// Connect to Redis
redis.on('connect', () => {
    console.log('Redis connected successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
