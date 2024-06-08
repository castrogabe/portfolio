const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const seedRouter = require('./routes/seedRoutes.js');
const userRouter = require('./routes/userRoutes.js');
const websiteRouter = require('./routes/websiteRoutes.js');
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
app.use('/api/websites', websiteRouter);

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something broke!' });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
