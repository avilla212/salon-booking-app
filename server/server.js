// Testing server.js
const express = require('express');
const app = express();

app.use(express.json());

// Test route at root
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

module.exports = app; // Export the app for testing purposes
