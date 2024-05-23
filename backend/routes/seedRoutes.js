const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel.js');
const Website = require('../models/websiteModel.js');
const data = require('../data.js');

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  try {
    await User.deleteMany({});
    await Website.deleteMany({});
    const createdUsers = await User.insertMany(data.users);
    const createdWebsites = await Website.insertMany(data.websites);
    res.send({ createdUsers, createdWebsites });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = seedRouter;
