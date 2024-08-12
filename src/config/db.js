const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

const connectDB = async () => {
  try {
    // Connect to MongoDB using the connection string from environment variables
    await mongoose.connect("mongodb+srv://vakilraj26031997:Sx8egwe7ZrncGf9d@mydatabase.nunb2lw.mongodb.net/", { useNewUrlParser: true })
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
