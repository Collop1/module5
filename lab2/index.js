const express = require('express');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express();
const port = 3000;

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);

// Set up server route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});