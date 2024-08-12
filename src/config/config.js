const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://vakilraj26031997:Sx8egwe7ZrncGf9d@mydatabase.nunb2lw.mongodb.net/", { useNewUrlParser: true })
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;