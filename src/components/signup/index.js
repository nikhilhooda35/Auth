

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../../models/userModel');
const { createUser } = require('../../controllers/userController');
const userModel = require('../../models/userModel');

const signup = async (req, res) => {
  try {
    const { username, password, role, email } = req.body;
    // Validate role
    if (role !== 'admin' && role !== 'user') {
      return res.status(400).json({ message: 'Role must be either "admin" or "user"' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser1 = {
      id: users.length + 1,
      username,
      password: hashedPassword,
      role, // Store the user role
      email
    };
    const newUser = new userModel(newUser1);

    // Save the new user to the database
    await newUser.save();

    createUser(newUser)

    res.status(201).json({ message: 'User created successfully', user: { username, role } });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { signup };

