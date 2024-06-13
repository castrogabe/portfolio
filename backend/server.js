require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const seedRouter = require('./routes/seedRoutes.js');
const userRouter = require('./routes/userRoutes.js');
const uploadRouter = require('./routes/uploadRoutes.js');
const websiteRouter = require('./routes/websiteRoutes.js');
const summaryRouter = require('./routes/summaryRoutes');
const messageRouter = require('./routes/messageRoutes.js');

const config = require('./config.js');

mongoose
  .connect(config.MONGODB_URL)
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

// Serve the uploads directory statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// routes
app.use('/api/upload', uploadRouter);
app.use('/api/seed', seedRouter);
app.use('/api/users', userRouter);
app.use('/api/websites', websiteRouter);
app.use('/api/summary', summaryRouter);
app.use('/api/messages', messageRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = config.PORT;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
