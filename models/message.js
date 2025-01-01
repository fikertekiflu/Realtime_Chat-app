const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the sender
        recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the recipient
        content: { type: String, required: true }, // The actual message
        isRead: { type: Boolean, default: false }, // Message read status
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Message', messageSchema);
