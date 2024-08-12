const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');
const loginRouters = require('./routes/loginRoutes');
const signupRouters = require('./routes/signupRouter');
const { signup } = require('./components/signup');
const cors = require('cors');

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/login', loginRouters); 
app.use('/api/signup', signupRouters); 

module.exports = app;