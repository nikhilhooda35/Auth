const express = require('express');
const { loginUser } = require('../components/login');
const { signup } = require('../components/signup');
const router = express.Router();

router.post('/', loginUser);

module.exports = router;