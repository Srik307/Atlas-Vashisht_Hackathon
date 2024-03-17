// Import the Express library
const express = require('express');
const translator=require('./NL2SQl/translate.js');
// Create an instance of Express
const app = express();

// Define a route
app.get('/', (req, res) => {
    const s=translator.converttosql('Student whose mark is greater than 20',"students,marks,regno,")
  res.send('Hello, World!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


