const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    update_time: { type: String }, // Fixed the key to type
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
