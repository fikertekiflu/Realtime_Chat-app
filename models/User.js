const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true }, // Unique username
        email: { type: String, required: true, unique: true },    // User's email
        password: { type: String, required: true },              // Encrypted password
        isOnline: { type: Boolean, default: false },             // Online status
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

module.exports = mongoose.model('User', userSchema);
