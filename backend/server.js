const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const seedRouter = require('./routes/seedRoutes.js');
const userRouter = require('./routes/userRoutes.js');
const Website = require('./models/websiteModel');
require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/seed', seedRouter);
app.use('/api/users', userRouter);
app.get('/api/websites', async (req, res) => {
  try {
    const websites = await Website.find();
    res.send(websites);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching websites' });
  }
});

app.post('/api/websites', async (req, res) => {
  const {
    name,
    slug,
    image,
    language,
    languageDescription,
    description,
    link,
  } = req.body;
  const newWebsite = new Website({
    name,
    slug,
    image,
    language,
    languageDescription,
    description,
    link,
  });
  try {
    const createdWebsite = await newWebsite.save();
    res.status(201).send({ message: 'Website Added', website: createdWebsite });
  } catch (error) {
    res.status(500).send({ message: 'Error Adding Website' });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
