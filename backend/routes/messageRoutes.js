const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Message = require('../models/messageModel.js');
const { isAuth, isAdmin, transporter } = require('../utils.js');

const messageRouter = express.Router();

const PAGE_SIZE = 12;

messageRouter.get(
  '/admin',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const page = parseInt(query.page) || 1;
    const pageSize = parseInt(query.pageSize) || PAGE_SIZE;

    const messages = await Message.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    const countMessages = await Message.countDocuments();
    res.send({
      messages,
      totalMessages: countMessages,
      page,
      pages: Math.ceil(countMessages / pageSize),
    });
  })
);

messageRouter.post('/contact', (req, res) => {
  const {
    update_time,
    fullName,
    email,
    subject,
    message,
    replied,
    replyContent,
    replyEmail,
    replySentAt,
  } = req.body;

  const newMessage = new Message({
    update_time,
    fullName,
    email,
    subject,
    message,
    replied,
    replyContent,
    replyEmail,
    replySentAt,
  });

  newMessage
    .save()
    .then((savedMessage) => {
      res.status(201).json(savedMessage);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: 'Failed to save message', error: error.message });
    });
});

messageRouter.get('/', (req, res) => {
  Message.find()
    .then((foundMessages) => res.json(foundMessages))
    .catch((error) => {
      res
        .status(500)
        .json({ message: 'Failed to retrieve messages', error: error.message });
    });
});

messageRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const message = await Message.findById(id);
    if (message) {
      await Message.deleteOne({ _id: id });
      res.send({ message: 'Message deleted successfully' });
    } else {
      res.status(404).send({ message: 'Message Not Found' });
    }
  })
);

messageRouter.post('/reply', async (req, res) => {
  const { email, subject, replyContent } = req.body;

  try {
    const emailContent = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `Re: ${subject}`,
      html: `
        <h1>Reply to Your Message</h1>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message Reply:</strong> ${replyContent}</p>
        <p>Thank you,</p>
        <p>profile.com</p>
      `,
    };

    console.log('Reply Content:', emailContent);

    const info = await transporter.sendMail(emailContent);
    console.log('Email sent:', info.response);

    res.json({ message: 'Reply sent successfully' });
  } catch (error) {
    console.error('Error sending reply:', error);
    res
      .status(500)
      .json({ message: 'Failed to send reply', error: error.message });
  }
});

module.exports = messageRouter;
