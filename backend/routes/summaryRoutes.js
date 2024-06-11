const express = require('express');
const User = require('../models/userModel');
const Website = require('../models/websiteModel');
const { isAuth, isAdmin } = require('../utils');

const summaryRouter = express.Router();

summaryRouter.get('/summary', isAuth, isAdmin, async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $group: {
          _id: null,
          numUsers: { $sum: 1 },
        },
      },
    ]);
    const websites = await Website.aggregate([
      {
        $group: {
          _id: '$languageDescription',
          totalWebsites: { $sum: 1 },
        },
      },
    ]);
    res.send({ users, websites });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = summaryRouter;
