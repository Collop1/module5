const express = require('express');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = require('./app');
const port = 3000;

// Set up server route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// map the calculator routes to the app
app.use('/calculator', calculatorRoutes);

// map the public HTML file
app.use('/public', express.static('public'));

// Start server
app.listen(port, () => {
  console.log(`App listening at 
    http://localhost:${port}`);
});