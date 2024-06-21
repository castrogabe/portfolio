const express = require('express');
const { isAuth, isAdmin } = require('../utils');

const router = express.Router();

let typewriterText = '';

router.get('/typewriter', (req, res) => {
  res.send({ text: typewriterText });
});

router.put('/typewriter', isAuth, isAdmin, (req, res) => {
  typewriterText = req.body.text;
  res.send({ text: typewriterText });
});

module.exports = router;
