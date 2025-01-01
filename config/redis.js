const Redis = require('ioredis');

const redis = new Redis({
    host: process.env.REDIS_HOST || '127.0.0.1',  // Use your local Redis host or an external Redis server
    port: process.env.REDIS_PORT || 6379,        // Default Redis port
});

redis.on('connect', () => {
    console.log('Connected to Redis');
});

redis.on('error', (err) => {
    console.error('Redis error:', err);
});

module.exports = redis;
