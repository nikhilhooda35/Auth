const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../../models/userModel');
const cors = require('cors');

const loginUser = async (req, res) => {
  try {
    const users = await User.find({ username: req.body.username });


    if (users.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const user = users[0]; // Assuming email is unique

    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) {
        console.error('bcrypt.compare error:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
      if (!result) {
        return res.status(401).json({ message: 'Wrong password' });
      }

      const token = jwt.sign({ id: user.id, username: user.username }, 'your_secret_key', { expiresIn: '1h' });
      res.status(201).json({ token: token, message: 'Login successfully', user: user });
    });
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



module.exports = { loginUser };
