// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Express middleware
app.use(express.json());

// Define routes and middleware here

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
