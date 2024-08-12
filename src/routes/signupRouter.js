const express = require('express');
const { signup } = require('../components/signup');
const router = express.Router();

// Define the signup route
router.post('/', signup); // Adjusted to use '/' for signup

module.exports = router;
