const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const expressAsyncHandler = require('express-async-handler');
const User = require('../models/userModel.js');
const {
  isAuth,
  isAdmin,
  generateToken,
  baseUrl,
  transporter,
} = require('../utils.js');

const userRouter = express.Router();

const PAGE_SIZE = 12; // 12 items per page

// Admin route to get paginated list of users
userRouter.get(
  '/admin',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const page = query.page || 1;
    const pageSize = query.pageSize || PAGE_SIZE;

    const users = await User.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    const countUsers = await User.countDocuments();
    res.send({
      users,
      totalUsers: countUsers,
      page,
      pages: Math.ceil(countUsers / pageSize),
    });
  })
);

// User profile update
userRouter.put(
  '/profile',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }

      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  })
);

// Route to get all users (admin only)
userRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  })
);

// Get user by ID (admin only)
userRouter.get(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

// Update user by ID (admin only)
userRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isAdmin = Boolean(req.body.isAdmin);
      const updatedUser = await user.save();
      res.send({ message: 'User Updated', user: updatedUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

// User sign-in
userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);

// User sign-up
userRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    // Password complexity requirements (example: minimum length, uppercase, lowercase, digit, and special character)
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/;

    if (!passwordRegex.test(password)) {
      return res
        .status(400)
        .send({ message: 'Password does not meet complexity requirements.' });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);

// reset password
userRouter.post(
  '/forget-password',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '10m', // Change the expiration time to 10 minutes
      });
      user.resetToken = token;
      await user.save();

      console.log(`${baseUrl()}/reset-password/${token}`);

      const emailContent = {
        from: 'profile.com', // your website.com
        to: `${user.name} <${user.email}>`,
        subject: `Reset Password`,
        html: ` 
        <p>Please Click the following link to reset your password, link expires in 10 minutes</p> 
        <a href="${baseUrl()}/reset-password/${token}"}>Reset Password</a>
        `,
      };

      try {
        // Send the email using the `transporter`
        const info = await transporter.sendMail(emailContent);
        console.log('Email sent: ' + info.response);
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ message: 'Error sending email.' });
        return;
      }
      res.send({ message: 'We sent reset password link to your email.' });
    } else {
      res.status(404).send({ message: 'Email Not Found' });
    }
  })
);

userRouter.post(
  '/reset-password',
  expressAsyncHandler(async (req, res) => {
    const { password, token } = req.body;

    // Password complexity requirements
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/;

    if (!passwordRegex.test(password)) {
      return res
        .status(400)
        .send({ message: 'Password does not meet complexity requirements.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        const user = await User.findOne({ resetToken: token });
        if (user) {
          user.password = bcrypt.hashSync(password, 8);
          await user.save();
          res.send({
            message: 'Password reset successfully',
          });
        } else {
          res.status(404).send({ message: 'User not found' });
        }
      }
    });
  })
);

module.exports = userRouter;
