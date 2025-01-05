const express = require('express');
const connectMongo = require('./config/db');
const redis = require('./config/redis');
const User = require('./models/User');  
const Message = require('./models/message');  // Import the Message model
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectMongo();
 require('./models/User');

// Connect to Redis
redis.on('connect', () => {
    console.log('Redis connected successfully');
});

app.use(cors());
app.use(express.json());
app.use('/api/auth', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
});
