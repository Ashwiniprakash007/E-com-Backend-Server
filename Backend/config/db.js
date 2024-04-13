const mongoose = require("mongoose");

const connection = mongoose.connect(
  `mongodb://127.0.0.1:27017/Users`,{
    serverSelectionTimeoutMS: 5000, // Set server selection timeout to 5 seconds
  }
);

module.exports = connection;